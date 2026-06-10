<?php get_header(); ?>

<div class="container py-5">

  <!-- COLOR PALETTE -->
  <section class="mb-5">
    <hr>
    <h2 class="mb-4">Color Palette</h2>
    <div class="d-flex gap-5 flex-wrap mt-4">

      <div>
        <div class="color-swatch" style="background-color: #FF6449;"></div>
        <p class="mt-2 mb-0">Brand orange</p>
        <p class="text-muted">HEX #FF6449</p>
      </div>

      <div>
        <div class="color-swatch" style="background-color: #000000;"></div>
        <p class="mt-2 mb-0">Pure black</p>
        <p class="text-muted">HEX #000000</p>
      </div>

      <div>
        <div class="color-swatch color-swatch--white" style="background-color: #FFFFFF;"></div>
        <p class="mt-2 mb-0">Pure white</p>
        <p class="text-muted">HEX #FFFFFF</p>
      </div>

    </div>
  </section>

  <!-- COMPONENTS DESKTOP -->
  <section class="mb-5">
    <hr>
    <div class="components-header bg-black text-white p-4 mb-5">
      <p class="mb-0">Components — desktop</p>
    </div>

    <div class="d-flex align-items-start gap-5 flex-wrap">

      <div>
        <a href="#" class="btn-outline-brand d-inline-block">BUTTON</a>
        <p class="mt-2 text-muted">Button</p>
      </div>

      <div>
        <a href="#" class="btn-filled-brand d-inline-block">BUTTON</a>
        <p class="mt-2 text-muted">Button — completed hoverstate</p>
      </div>

      <div>
        <a href="#" class="tag-default d-inline-block">TAG</a>
        <p class="mt-2 text-muted">Tag</p>
      </div>

      <div>
        <a href="#" class="tag-selected d-inline-block">TAG</a>
        <p class="mt-2 text-muted">Tag — selected</p>
      </div>

    </div>
  </section>

  <!-- COMPONENTS MOBILE -->
  <section class="mb-5">
    <hr>
    <div class="components-header bg-black text-white p-4 mb-5">
      <p class="mb-0">Components — mobile</p>
    </div>

    <div class="d-flex align-items-start gap-5 flex-wrap">

      <div style="max-width: 320px; width: 100%;">
        <a href="#" class="btn-outline-brand btn-full-width d-block text-center">BUTTON</a>
        <p class="mt-2 text-muted">Button</p>
      </div>

      <div>
        <a href="#" class="tag-default d-inline-block">TAG</a>
        <p class="mt-2 text-muted">Tag</p>
      </div>

      <div>
        <a href="#" class="tag-selected d-inline-block">TAG</a>
        <p class="mt-2 text-muted">Tag — selected</p>
      </div>

    </div>
  </section>

</div>

<?php get_footer(); ?>
