---
layout: default 
---

{% include about.html %}

<ul class='posts list-unstyled'>
    {% for post in site.posts %}
    <li class='post'>
        <hr />

        <div class='row'>
            <div class='col-xs-1'>
                <img class='bullet' src='/assets/img/star.svg' />
            </div>

            <div class='col-xs-11'>
                <h2 class='title'>
                    <a href='{{ post.url | prepend: site.baseurl }}'>{{ post.title }}</a>
                </h2>

                <p class='meta'>
                    {{ post.date | date: '%Y.%m.%d' }}
                </p>

                <div class='excerpt'>
                    {{ post.content | split:'<!--break-->' | first }}
                    {% if post.content contains '<!--break-->' %}
                        <p>...</p>
                        <p class='read-more-link'> <a href="{{ post.url }}">read more</a></p>
                    {% endif %}
                </div>
            </div>
        </div>
    </li>
    {% endfor %}
</ul>