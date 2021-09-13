---
layout: master
title: Contribute
navOrder: 6
---

<section class="o-container o-container--padded">
    <div class="o-wrapper o-wrapper--content">
        {% include  components.hero.html 
                    title="Get involved with our friendly LocalGov IMS community." 
                    text="Our [GitHub repositories](https://github.com/localgovims) provide the perfect place to get started. There'll you find the codebase, the core of our documentation and issues / change requests submitted by the core team and LocalGov IMS users to help improve it."
                    image="hero-contribute.png"
        %}
    </div>
</section>
<section class="o-container o-container--padded o-container--sunken">
  <div class="o-wrapper o-wrapper--content">
    <h2>Contribute to the project</h2>
    <p>
      There are various ways you can contribute to the project, from being a consulting party helping answer our queries and completing surveys, right through to cutting code or implementing the LocalGov IMS in your organisation.
    </p>
    <p>
      We're always seeking willing participants to help us manage all of these things and to create new assets that future LocalGov IMS users might find useful. 
    </p>
    <p>
      However you'd like to contribute, we'd love to hear from you. Fill in the form below, and we'll be in touch.
    </p>
  </div>
</section>
<section class="o-container o-container--padded">
  <div class="o-wrapper o-wrapper--content">
    <form class="c-contribute__form"
          action="https://formspree.io/f/xwkaazkz"
          method="POST" >
      <label class="c-contribute__label" labelfor="name">Your name: *</label>
      <input class="c-contribute__text-field" name="name" required>
      <label class="c-contribute__label" labelfor="email">Your email: *</label>
      <input class="c-contribute__text-field" type="email" name="_replyto" required>
      <label class="c-contribute__label" labelfor="email">Your organisation: *</label>
      <input class="c-contribute__text-field" name="organisation" required>
      <label class="c-contribute__label" labelfor="message">How involved would you like to be?: *</label>
        <textarea class="c-contribute__text-area" name="message" required></textarea>
      <button class="c-button" type="submit">Send</button> 
      <p>* Required fields.</p>
    </form>
    <p class="c-contribute__disclaimer">You will be transferred to Formspree to process your information. We won't share your details with anyone outside of the project.</p>
  </div>
</section>