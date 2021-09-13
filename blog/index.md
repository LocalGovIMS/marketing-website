---
layout: master
title: Blog
navOrder: 7
---

<section class="o-container o-container--padded">
    <div class="o-wrapper o-wrapper--content">
        {% include  components.hero.html 
                    title="Stay up to date with the latest on the project." 
                    text="You can read all of our blog posts below or skip to posts from our specific project phases so far: [Discovery](/blog/discovery), [Alpha](/blog/alpha) or [Beta](/blog/beta)."
                    image="hero-blog.png"
        %}
        {% include  tools.grid-posts.html
                    excerpts="true" 
                    dates="true"
        %}
    </div>
</section>

<!-- TODO: Implement lazy loading -->