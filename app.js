const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];
const email = '2119jayesh@gmail.com';
$$('[data-year]').forEach(element => { element.textContent = new Date().getFullYear(); });

// Navigation is shared across the seven real pages.
const menuToggle = $('.menu-toggle');
const mobileNav = $('#mobile-nav');
function closeMenu() {
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open navigation');
  mobileNav.hidden = true;
}
menuToggle.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') !== 'true';
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  mobileNav.hidden = !open;
});
$$('a', mobileNav).forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
window.matchMedia('(min-width:601px)').addEventListener('change', event => { if (event.matches) closeMenu(); });

// Collection filter preserves the real project-page links.
$$('[data-filter]').forEach(button => button.addEventListener('click', () => {
  const filter = button.dataset.filter;
  $$('[data-filter]').forEach(other => {
    other.classList.toggle('active', other === button);
    other.setAttribute('aria-pressed', String(other === button));
  });
  $$('.work-card').forEach(card => { card.hidden = filter !== 'all' && card.dataset.category !== filter; });
  $('.work-grid').classList.toggle('filtered', filter !== 'all');
  $('#filter-status').textContent = filter === 'all' ? 'Showing all four collections.' : 'Showing ' + button.textContent.trim() + ' collection.';
}));

$$('.service-list details').forEach(detail => detail.addEventListener('toggle', () => {
  if (detail.open) $$('.service-list details').forEach(other => { if (other !== detail) other.open = false; });
}));

const imageDialog = $('#image-dialog');
let lastZoomTrigger;
$$('[data-zoom]').forEach(button => button.addEventListener('click', () => {
  lastZoomTrigger = button;
  $('#enlarged-image').src = button.dataset.zoom;
  $('#enlarged-image').alt = button.dataset.alt;
  imageDialog.showModal();
  document.body.classList.add('modal-open');
}));
$('.close-image').addEventListener('click', () => imageDialog.close());
imageDialog.addEventListener('click', event => { if (event.target === imageDialog) imageDialog.close(); });
imageDialog.addEventListener('close', () => {
  $('#enlarged-image').removeAttribute('src');
  document.body.classList.remove('modal-open');
  lastZoomTrigger?.focus({preventScroll:true});
});

$$('video').forEach(video => video.addEventListener('play', () => {
  $$('video').forEach(other => { if (other !== video) other.pause(); });
}));

// Original models, loaded only on the dedicated CGI page.
const models = {
  laser: {title:'iBELL Laser 120M', src:'assets/models/IBL%20Laser%20120M.glb', description:'A commercial product model combining hard-surface geometry with realistic materials and a detailed product presentation.', details:['Hard-surface 3D modelling','UV unwrapping and cleanup','PBR materials and texturing','Blender & Substance Painter']},
  heat: {title:'Heat Gun', src:'assets/models/HEAT%20GUN.glb', description:'A power-tool visualization with accurate hard-surface modelling, detailed materials, and an interactive presentation.', details:['Detailed product modelling','UV mapping and optimization','Realistic PBR texturing','Blender & Substance Painter']}
};
let modulePromise;
let webGLAvailable;
let selectedModel = 'laser';
let renderRequest = 0;
function canRender3D() {
  if (webGLAvailable === undefined) {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl2');
      webGLAvailable = Boolean(gl);
      if (gl) gl.getExtension('WEBGL_lose_context')?.loseContext();
    } catch { webGLAvailable = false; }
  }
  return webGLAvailable;
}
function updateModelInfo(key) {
  selectedModel = key;
  const model = models[key];
  $$('.model-tab').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.model === key)));
  $('#model-title').textContent = model.title;
  $('#model-description').textContent = model.description;
  $('#model-details').replaceChildren(...model.details.map(text => { const li = document.createElement('li'); li.textContent = text; return li; }));
  $('#model-download').href = model.src;
  $('model-viewer').setAttribute('alt', model.title + ' interactive 3D model');
}
async function renderModel(key) {
  updateModelInfo(key);
  const request = ++renderRequest;
  const status = $('#model-loading');
  status.classList.remove('loaded');
  status.innerHTML = '<span class="loading-dot" aria-hidden="true"></span><span>Loading the original 3D model…</span>';
  if (!canRender3D()) {
    status.innerHTML = '<span class="fallback-cube" aria-hidden="true">◇</span><span>3D preview isn’t supported by this browser.<br>Download the original model to explore it.</span>';
    return;
  }
  try {
    if (!modulePromise) modulePromise = import('./03-Jayesh-Website-Upload/assets/model-viewer.min.js').catch(error => { modulePromise = null; throw error; });
    await modulePromise;
    if (request !== renderRequest) return;
    $('model-viewer').src = models[key].src;
  } catch {
    status.innerHTML = '<span>The 3D viewer could not load.<br>The original model is available to download below.</span>';
  }
}
if ($('model-viewer')) {
  updateModelInfo('laser');
  $('#model-loading').innerHTML = '<span class="fallback-cube" aria-hidden="true">◇</span><span>Your next perspective.</span>';
  $('model-viewer').addEventListener('load', () => $('#model-loading').classList.add('loaded'));
  $('model-viewer').addEventListener('error', () => {
    $('#model-loading').classList.remove('loaded');
    $('#model-loading').innerHTML = '<span>This model could not be displayed.<br>Download the original file to explore it.</span>';
  });
  let observer;
  $$('.model-tab').forEach(button => button.addEventListener('click', () => { observer?.disconnect(); renderModel(button.dataset.model); }));
  if ('IntersectionObserver' in window) {
    observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) { observer.disconnect(); renderModel(selectedModel); }
    }, {rootMargin:'100px'});
    observer.observe($('.model-stage'));
  } else renderModel('laser');
}

$('#copy-email')?.addEventListener('click', async () => {
  try { await navigator.clipboard.writeText(email); $('#copy-status').textContent = 'Email address copied.'; }
  catch { $('#copy-status').textContent = 'Select and copy: ' + email; }
});
const form = $('#contact-form');
form?.addEventListener('submit', async event => {
  event.preventDefault();
  if (!form.reportValidity() || form.elements._honey.value) return;
  const button = $('button[type=submit]', form), status = $('#form-status');
  button.disabled = true;
  button.textContent = 'Sending…';
  status.textContent = '';
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 18000);
  try {
    const response = await fetch(form.action, {method:'POST',body:new FormData(form),headers:{Accept:'application/json'},signal:controller.signal});
    const data = await response.json();
    if (!response.ok || !(data.success === true || data.success === 'true')) throw Error('Message not confirmed');
    status.textContent = 'Message sent. Thank you for getting in touch.';
    form.reset();
  } catch { status.textContent = 'Your message could not be sent. Please email ' + email + ' directly.'; }
  finally { clearTimeout(timer); button.disabled = false; button.innerHTML = 'Send message <span aria-hidden="true">↗</span>'; }
});
