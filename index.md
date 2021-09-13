---
layout: master
title: Home
navOrder: 1
---

<section class="o-container o-container--padded o-container--leader">
    <div class="o-wrapper o-wrapper--content">
        <h2 class="hidden">What is the LocalGov IMS?</h2>
        {% include  components.hero.html
                    title="Free.<br/>Easy to use.<br/>Configurable."
                    text="A viable and sustainable alternative income management system for the public sector. Community managed for the public good."
                    linkUrl="/features"
                    linkText="Review the features"
                    image="hero-home.png"
                    level="3"
        %}
    </div>
</section>
<section class="o-container o-container--padded o-container--follower">
    <div class="o-wrapper o-wrapper--content">
        <div class="o-grid o-grid--spaced">
            <div class="o-grid--third">
                {% include  components.highlight.html
                            title="Priority driven"
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis lacinia metus, a pellentesque quam."
                            linkUrl="/roadmap"
                            linkText="See the future roadmap"
                            style="first"
                            level="3"
                %}
            </div>
            <div class="o-grid--third">
                {% include  components.highlight.html
                            title="Standardised"
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis lacinia metus, a pellentesque quam."
                            linkUrl="/docs"
                            linkText="Read the documentation"
                            level="3" 
                %}
            </div>
            <div class="o-grid--third">
                {% include  components.highlight.html
                            title="Open source"
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis lacinia metus, a pellentesque quam."
                            linkUrl="/contribute"
                            linkText="Learn how to contribute"
                            style="last"
                            level="3" 
                %}
            </div>
        </div>
    </div>
</section>
<section class="o-container o-container--padded o-container--sunken">
    <div class="o-wrapper o-wrapper--screen">
        {% include  components.feature.html  
                    title="Built by local government, for local government" 
                    text="LocalGov IMS is the result of a collaborative project in the public sector to create a reusable income management system for the public good. [Discovery](/blog/discovery), [Alpha](/blog/alpha) and [Beta](/blog/beta) project phases have already researched, developed and tested a solution to support all your payment channels from Chip & Pin machines to cash tills to payments taken online and over the phone. It's rich functionality allows you to configure imports and exports to and from your bank, external income providers and back office systems. You can create and manage processing rules for your income lines to automatically split and allocate money across multiple cost centres and you can issue full and partial refunds quickly and easily. With Barnsley already onboard as a user, we're now working on deployment paths for other councils."
                    linkUrl="/blog" 
                    linkText="Read more in our blog"
                    image="partners.png"
        %}
    </div>
</section>
<section class="o-container o-container--padded">
    <div class="o-wrapper o-wrapper--content">
        <h2 class="center" role="heading" aria-level="2">Latest from the project blog</h2>
        {% include  tools.grid-posts.html
                    limit="3"
                    excerpts="true" 
                    dates="true"
                    level="3"
        %}
    </div>
</section>