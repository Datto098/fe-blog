export const categories = [
  {
    id: 1,
    name: 'Code quality',
    slug: 'code-quality',
  },
  {
    id: 2,
    name: 'Css',
    slug: 'css',
  },
  {
    id: 3,
    name: 'Javascript',
    slug: 'javascript',
  },
  {
    id: 4,
    name: 'Productivity',
    slug: 'productivity',
  },
  {
    id: 5,
    name: 'Pwa',
    slug: 'Pwa',
  },
  {
    id: 6,
    name: 'Web development',
    slug: 'web-development',
  }
];

export const blogs = [
  // Blog 1
  {
    blog_types : {
      blog_category_id : 1,
      blog_category_name: 'Code quality',
      blog_category_slug: 'code-quality',
    },
    blog_contents : {
      id : 1,
      title: 'RESTful APIs: Building Blocks Of Modern Web Applications',
      description: '',
      content: `<p>Until now, trying to style an article, document, or blog post with Tailwind has been a tedious task that required a keen eye for typography and a lot of complex custom CSS.</p>
      <p>By default, Tailwind removes all of the default browser styling from paragraphs, headings, lists and more. This ends up being really useful for building application UIs because you spend less time undoing user-agent styles, but when you <em>really are</em> just trying to style some content that came from a rich-text editor in a CMS or a markdown file, it can be surprising and unintuitive.</p>
      <p>We get lots of complaints about it actually, with people regularly asking us things like:</p>
      <blockquote>
      <p>Why is Tailwind removing the default styles on my <code>h1</code> elements? How do I disable this? What do you mean I lose all the other base styles too?
      We hear you, but we're not convinced that simply disabling our base styles is what you really want. You don't want to have to remove annoying margins every time you use a <code>p</code> element in a piece of your dashboard UI. And I doubt you really want your blog posts to use the user-agent styles either — you want them to look <em>awesome</em>, not awful.</p>
      </blockquote>
      <p>The <code>@tailwindcss/typography</code> plugin is our attempt to give you what you <em>actually</em> want, without any of the downsides of doing something stupid like disabling our base styles.</p>
      <p>It adds a new <code>prose</code> class that you can slap on any block of vanilla HTML content and turn it into a beautiful, well-formatted document:</p>
      <div data-rehype-pretty-code-fragment=""><pre tabindex="0" data-language="html" data-theme="default" style="background-color: rgb(36, 41, 46);"><code data-language="html" data-theme="default"><span data-line=""><span style="color: rgb(225, 228, 232);">&lt;</span><span style="color: rgb(133, 232, 157);">article</span><span style="color: rgb(225, 228, 232);"> </span><span style="color: rgb(179, 146, 240);">className</span><span style="color: rgb(225, 228, 232);">=</span><span style="color: rgb(158, 203, 255);">"prose"</span><span style="color: rgb(225, 228, 232);">&gt;</span></span>
      <span data-line=""><span style="color: rgb(225, 228, 232);">  &lt;</span><span style="color: rgb(133, 232, 157);">h1</span><span style="color: rgb(225, 228, 232);">&gt;Garlic bread with cheese: What the science tells us&lt;/</span><span style="color: rgb(133, 232, 157);">h1</span><span style="color: rgb(225, 228, 232);">&gt;</span></span>
      <span data-line=""><span style="color: rgb(225, 228, 232);">  &lt;</span><span style="color: rgb(133, 232, 157);">p</span><span style="color: rgb(225, 228, 232);">&gt;</span></span>
      <span data-line=""><span style="color: rgb(225, 228, 232);">    For years parents have espoused the health benefits of eating garlic bread</span></span>
      <span data-line=""><span style="color: rgb(225, 228, 232);">    with cheese to their children, with the food earning such an iconic status</span></span>
      <span data-line=""><span style="color: rgb(225, 228, 232);">    in our culture that kids will often dress up as warm, cheesy loaf for</span></span>
      <span data-line=""><span style="color: rgb(225, 228, 232);">    Halloween.</span></span>
      <span data-line=""><span style="color: rgb(225, 228, 232);">  &lt;/</span><span style="color: rgb(133, 232, 157);">p</span><span style="color: rgb(225, 228, 232);">&gt;</span></span>
      <span data-line=""><span style="color: rgb(225, 228, 232);">  &lt;</span><span style="color: rgb(133, 232, 157);">p</span><span style="color: rgb(225, 228, 232);">&gt;</span></span>
      <span data-line=""><span style="color: rgb(225, 228, 232);">    But a recent study shows that the celebrated appetizer may be linked to a</span></span>
      <span data-line=""><span style="color: rgb(225, 228, 232);">    series of rabies cases springing up around the country.</span></span>
      <span data-line=""><span style="color: rgb(225, 228, 232);">  &lt;/</span><span style="color: rgb(133, 232, 157);">p</span><span style="color: rgb(225, 228, 232);">&gt;</span></span>
      <span data-line=""><span style="color: rgb(225, 228, 232);">&lt;/</span><span style="color: rgb(133, 232, 157);">article</span><span style="color: rgb(225, 228, 232);">&gt;</span></span></code></pre></div>
      <p>For more information about how to use the plugin and the features it includes, <a href="https://github.com/tailwindcss/typography/blob/master/README.md">read the documentation</a>.</p>
      <hr>
      <h2 id="what-to-expect-from-here-on-out">What to expect from here on out<a aria-hidden="true" tabindex="-1" href="#what-to-expect-from-here-on-out"><span class="icon icon-link"></span></a></h2>
      <p>What follows from here is just a bunch of absolute nonsense I've written to dogfood the plugin itself. It includes every sensible typographic element I could think of, like <strong>bold text</strong>, unordered lists, ordered lists, code blocks, block quotes, <em>and even italics</em>.</p>
      <p>It's important to cover all of these use cases for a few reasons:</p>
      <ol>
      <li>We want everything to look good out of the box.</li>
      <li>Really just the first reason, that's the whole point of the plugin.</li>
      <li>Here's a third pretend reason though a list with three items looks more realistic than a list with two items.</li>
      </ol>
      <p>Now we're going to try out another header style.</p>
      <h3 id="typography-should-be-easy">Typography should be easy<a aria-hidden="true" tabindex="-1" href="#typography-should-be-easy"><span class="icon icon-link"></span></a></h3>
      <p>So that's a header for you — with any luck if we've done our job correctly that will look pretty reasonable.</p>
      <p>Something a wise person once told me about typography is:</p>
      <blockquote>
      <p>Typography is pretty important if you don't want your stuff to look like trash. Make it good then it won't be bad.</p>
      </blockquote>
      <p>It's probably important that images look okay here by default as well:</p>
      <img alt="Image" loading="lazy" width="718" height="404" decoding="async" data-nimg="1" sizes="100vw" srcset="/_next/image?url=/blogs/luca-bravo-XJXWbfSo2f0-unsplash.webp&amp;w=640&amp;q=75 640w, /_next/image?url=/blogs/luca-bravo-XJXWbfSo2f0-unsplash.webp&amp;w=750&amp;q=75 750w, /_next/image?url=/blogs/luca-bravo-XJXWbfSo2f0-unsplash.webp&amp;w=828&amp;q=75 828w, /_next/image?url=/blogs/luca-bravo-XJXWbfSo2f0-unsplash.webp&amp;w=1080&amp;q=75 1080w, /_next/image?url=/blogs/luca-bravo-XJXWbfSo2f0-unsplash.webp&amp;w=1200&amp;q=75 1200w, /_next/image?url=/blogs/luca-bravo-XJXWbfSo2f0-unsplash.webp&amp;w=1920&amp;q=75 1920w, /_next/image?url=/blogs/luca-bravo-XJXWbfSo2f0-unsplash.webp&amp;w=2048&amp;q=75 2048w, /_next/image?url=/blogs/luca-bravo-XJXWbfSo2f0-unsplash.webp&amp;w=3840&amp;q=75 3840w" src="/_next/image?url=/blogs/luca-bravo-XJXWbfSo2f0-unsplash.webp&amp;w=3840&amp;q=75" style="color: transparent;">
      <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
      <p>Now I'm going to show you an example of an unordered list to make sure that looks good, too:</p>
      <ul>
      <li>So here is the first item in this list.</li>
      <li>In this example we're keeping the items short.</li>
      <li>Later, we'll use longer, more complex list items.</li>
      </ul>
      <p>And that's the end of this section.</p>
      <h2 id="what-if-we-stack-headings">What if we stack headings?<a aria-hidden="true" tabindex="-1" href="#what-if-we-stack-headings"><span class="icon icon-link"></span></a></h2>
      <h3 id="we-should-make-sure-that-looks-good-too">We should make sure that looks good, too.<a aria-hidden="true" tabindex="-1" href="#we-should-make-sure-that-looks-good-too"><span class="icon icon-link"></span></a></h3>
      <p>Sometimes you have headings directly underneath each other. In those cases you often have to undo the top margin on the second heading because it usually looks better for the headings to be closer together than a paragraph followed by a heading should be.</p>
      <h3 id="when-a-heading-comes-after-a-paragraph-">When a heading comes after a paragraph …<a aria-hidden="true" tabindex="-1" href="#when-a-heading-comes-after-a-paragraph-"><span class="icon icon-link"></span></a></h3>
      <p>When a heading comes after a paragraph, we need a bit more space, like I already mentioned above. Now let's see what a more complex list would look like.</p>
      <ul>
      <li>
      <p><strong>I often do this thing where list items have headings.</strong></p>
      <p>For some reason I think this looks cool which is unfortunate because it's pretty annoying to get the styles right.</p>
      <p>I often have two or three paragraphs in these list items, too, so the hard part is getting the spacing between the paragraphs, list item heading, and separate list items to all make sense. Pretty tough honestly, you could make a strong argument that you just shouldn't write this way.</p>
      </li>
      <li>
      <p><strong>Since this is a list, I need at least two items.</strong></p>
      <p>I explained what I'm doing already in the previous list item, but a list wouldn't be a list if it only had one item, and we really want this to look realistic. That's why I've added this second list item so I actually have something to look at when writing the styles.</p>
      </li>
      <li>
      <p><strong>It's not a bad idea to add a third item either.</strong></p>
      <p>I think it probably would've been fine to just use two items but three is definitely not worse, and since I seem to be having no trouble making up arbitrary things to type, I might as well include it.</p>
      </li>
      </ul>
      <p>After this sort of list I usually have a closing statement or paragraph, because it kinda looks weird jumping right to a heading.</p>
      <h2 id="code-should-look-okay-by-default">Code should look okay by default.<a aria-hidden="true" tabindex="-1" href="#code-should-look-okay-by-default"><span class="icon icon-link"></span></a></h2>
      <p>I think most people are going to use <a href="https://highlightjs.org/">highlight.js</a> or <a href="https://prismjs.com/">Prism</a> or something if they want to style their code blocks but it wouldn't hurt to make them look <em>okay</em> out of the box, even with no syntax highlighting.</p>
      <p>Here's what a default <code>tailwind.config.js</code> file looks like at the time of writing:</p>
      <div data-rehype-pretty-code-fragment=""><pre tabindex="0" data-language="js" data-theme="default" style="background-color: rgb(36, 41, 46);"><code data-language="js" data-theme="default"><span data-line=""><span style="color: rgb(121, 184, 255);">module</span><span style="color: rgb(225, 228, 232);">.</span><span style="color: rgb(121, 184, 255);">exports</span><span style="color: rgb(225, 228, 232);"> </span><span style="color: rgb(249, 117, 131);">=</span><span style="color: rgb(225, 228, 232);"> {</span></span>
      <span data-line=""><span style="color: rgb(225, 228, 232);">  purge: [],</span></span>
      <span data-line=""><span style="color: rgb(225, 228, 232);">  theme: {</span></span>
      <span data-line=""><span style="color: rgb(225, 228, 232);">    extend: {},</span></span>
      <span data-line=""><span style="color: rgb(225, 228, 232);">  },</span></span>
      <span data-line=""><span style="color: rgb(225, 228, 232);">  variants: {},</span></span>
      <span data-line=""><span style="color: rgb(225, 228, 232);">  plugins: [],</span></span>
      <span data-line=""><span style="color: rgb(225, 228, 232);">}</span></span></code></pre></div>
      <p>Hopefully that looks good enough to you.</p>
      <h3 id="what-about-nested-lists">What about nested lists?<a aria-hidden="true" tabindex="-1" href="#what-about-nested-lists"><span class="icon icon-link"></span></a></h3>
      <p>Nested lists basically always look bad which is why editors like Medium don't even let you do it, but I guess since some of you goofballs are going to do it we have to carry the burden of at least making it work.</p>
      <ol>
      <li><strong>Nested lists are rarely a good idea.</strong>
      <ul>
      <li>You might feel like you are being really "organized" or something but you are just creating a gross shape on the screen that is hard to read.</li>
      <li>Nested navigation in UIs is a bad idea too, keep things as flat as possible.</li>
      <li>Nesting tons of folders in your source code is also not helpful.</li>
      </ul>
      </li>
      <li><strong>Since we need to have more items, here's another one.</strong>
      <ul>
      <li>I'm not sure if we'll bother styling more than two levels deep.</li>
      <li>Two is already too much, three is guaranteed to be a bad idea.</li>
      <li>If you nest four levels deep you belong in prison.</li>
      </ul>
      </li>
      <li><strong>Two items isn't really a list, three is good though.</strong>
      <ul>
      <li>Again please don't nest lists if you want people to actually read your content.</li>
      <li>Nobody wants to look at this.</li>
      <li>I'm upset that we even have to bother styling this.</li>
      </ul>
      </li>
      </ol>
      <p>The most annoying thing about lists in Markdown is that <code>&lt;li&gt;</code> elements aren't given a child <code>&lt;p&gt;</code> tag unless there are multiple paragraphs in the list item. That means I have to worry about styling that annoying situation too.</p>
      <ul>
      <li>
      <p><strong>For example, here's another nested list.</strong></p>
      <p>But this time with a second paragraph.</p>
      <ul>
      <li>These list items won't have <code>&lt;p&gt;</code> tags</li>
      <li>Because they are only one line each</li>
      </ul>
      </li>
      <li>
      <p><strong>But in this second top-level list item, they will.</strong></p>
      <p>This is especially annoying because of the spacing on this paragraph.</p>
      <ul>
      <li>
      <p>As you can see here, because I've added a second line, this list item now has a <code>&lt;p&gt;</code> tag.</p>
      <p>This is the second line I'm talking about by the way.</p>
      </li>
      <li>
      <p>Finally here's another list item so it's more like a list.</p>
      </li>
      </ul>
      </li>
      <li>
      <p>A closing list item, but with no nested list, because why not?</p>
      </li>
      </ul>
      <p>And finally a sentence to close off this section.</p>
      <h2 id="there-are-other-elements-we-need-to-style">There are other elements we need to style<a aria-hidden="true" tabindex="-1" href="#there-are-other-elements-we-need-to-style"><span class="icon icon-link"></span></a></h2>
      <p>I almost forgot to mention links, like <a href="https://tailwindcss.com">this link to the Tailwind CSS website</a>. We almost made them blue but that's so yesterday, so we went with dark gray, feels edgier.</p>
      <p>We even included table styles, check it out:</p>
      <table><thead><tr><th>Wrestler</th><th>Origin</th><th>Finisher</th></tr></thead><tbody><tr><td>Bret "The Hitman" Hart</td><td>Calgary, AB</td><td>Sharpshooter</td></tr><tr><td>Stone Cold Steve Austin</td><td>Austin, TX</td><td>Stone Cold Stunner</td></tr><tr><td>Randy Savage</td><td>Sarasota, FL</td><td>Elbow Drop</td></tr><tr><td>Vader</td><td>Boulder, CO</td><td>Vader Bomb</td></tr><tr><td>Razor Ramon</td><td>Chuluota, FL</td><td>Razor's Edge</td></tr></tbody></table>
      <p>We also need to make sure inline code looks good, like if I wanted to talk about <code>&lt;span&gt;</code> elements or tell you the good news about <code>@tailwindcss/typography</code>.</p>
      <h3 id="sometimes-i-even-use-code-in-headings">Sometimes I even use <code>code</code> in headings<a aria-hidden="true" tabindex="-1" href="#sometimes-i-even-use-code-in-headings"><span class="icon icon-link"></span></a></h3>
      <p>Even though it's probably a bad idea, and historically I've had a hard time making it look good. This <em>"wrap the code blocks in backticks"</em> trick works pretty well though really.</p>
      <p>Another thing I've done in the past is put a <code>code</code> tag inside of a link, like if I wanted to tell you about the <a href="https://github.com/tailwindcss/docs"><code>tailwindcss/docs</code></a> repository. I don't love that there is an underline below the backticks but it is absolutely not worth the madness it would require to avoid it.</p>
      <h4 id="we-havent-used-an-h4-yet">We haven't used an <code>h4</code> yet<a aria-hidden="true" tabindex="-1" href="#we-havent-used-an-h4-yet"><span class="icon icon-link"></span></a></h4>
      <p>But now we have. Please don't use <code>h5</code> or <code>h6</code> in your content, Medium only supports two heading levels for a reason, you animals. I honestly considered using a <code>before</code> pseudo-element to scream at you if you use an <code>h5</code> or <code>h6</code>.</p>
      <p>We don't style them at all out of the box because <code>h4</code> elements are already so small that they are the same size as the body copy. What are we supposed to do with an <code>h5</code>, make it <em>smaller</em> than the body copy? No thanks.</p>
      <h3 id="we-still-need-to-think-about-stacked-headings-though">We still need to think about stacked headings though.<a aria-hidden="true" tabindex="-1" href="#we-still-need-to-think-about-stacked-headings-though"><span class="icon icon-link"></span></a></h3>
      <h4 id="lets-make-sure-we-dont-screw-that-up-with-h4-elements-either">Let's make sure we don't screw that up with <code>h4</code> elements, either.<a aria-hidden="true" tabindex="-1" href="#lets-make-sure-we-dont-screw-that-up-with-h4-elements-either"><span class="icon icon-link"></span></a></h4>
      <p>Phew, with any luck we have styled the headings above this text and they look pretty good.</p>
      <p>Let's add a closing paragraph here so things end with a decently sized block of text. I can't explain why I want things to end that way but I have to assume it's because I think things will look weird or unbalanced if there is a heading too close to the end of the document.</p>
      <p>What I've written here is probably long enough, but adding this final sentence can't hurt.</p>
      <h2 id="github-flavored-markdown">GitHub Flavored Markdown<a aria-hidden="true" tabindex="-1" href="#github-flavored-markdown"><span class="icon icon-link"></span></a></h2>
      <p>I've also added support for GitHub Flavored Mardown using <code>remark-gfm</code>.</p>
      <p>With <code>remark-gfm</code>, we get a few extra features in our markdown. Example: autolink literals.</p>
      <p>A link like <a href="http://www.example.com">www.example.com</a> or <a href="https://example.com">https://example.com</a> would automatically be converted into an <code>a</code> tag.</p>
      <p>This works for email links too: <a href="mailto:contact@example.com">contact@example.com</a>.</p>`,
      image: 'luca-bravo-XJXWbfSo2f0-unsplash.webp',
      created_at: 'November 12, 2022',
      view: 1052,
      time: 10
    },
    blog_topics : [
      {
        id: 1,
        title: 'What to expect from here on out',
        sub_title: [
          {
            sub_id: 1,
            title : 'Typography should be easy',
          }
        ]
      },
      {
        id: 2,
        title: 'What if we stack headings?',
       sub_title: [
          {
            sub_id: 1,
            title : 'We should make sure that looks good, too.'
          },
          {
            sub_id: 2,
            title : 'When a heading comes after a paragraph …'
          }
        ]
      },
      {
        id: 3,
        title: 'Code should look okay by default.',
       sub_title: [
          {
            sub_id: 1,
            title : 'What about nested lists?'
          }
        ]
      },
      {
        id: 4,
        title: 'There are other elements we need to style',
       sub_title: [
          {
            sub_id: 1,
            title : 'Sometimes I even use `code` in headings'
          },
          {
            sub_id: 2,
            title : "We haven't used an `h4` yet"
          },
          {
            sub_id: 3,
            title : 'We still need to think about stacked headings though.'
          },
          {
            sub_id: 4,
            title : "Let's make sure we don't screw that up with `h4` elements, either."
          }
        ]
      }
    ]
  },

  // Blog 2
  {
    blog_types : {
      blog_category_id : 4,
      blog_category_name: 'Productivity',
      blog_category_slug: 'productivity',
    },
    blog_contents : {
      id : 2,
      title: 'Automating Repetitive Tasks: Productivity Hacks For Developers',
      description: '',
      content: `<p>Until now, trying to style an article, document, or blog post with Tailwind has been a tedious task that required a keen eye for typography and a lot of complex custom CSS.</p>
      <p>By default, Tailwind removes all of the default browser styling from paragraphs, headings, lists and more. This ends up being really useful for building application UIs because you spend less time undoing user-agent styles, but when you <em>really are</em> just trying to style some content that came from a rich-text editor in a CMS or a markdown file, it can be surprising and unintuitive.</p>
      <p>We get lots of complaints about it actually, with people regularly asking us things like:</p>
      <blockquote>
      <p>Why is Tailwind removing the default styles on my <code>h1</code> elements? How do I disable this? What do you mean I lose all the other base styles too?
      We hear you, but we're not convinced that simply disabling our base styles is what you really want. You don't want to have to remove annoying margins every time you use a <code>p</code> element in a piece of your dashboard UI. And I doubt you really want your blog posts to use the user-agent styles either — you want them to look <em>awesome</em>, not awful.</p>
      </blockquote>
      <p>The <code>@tailwindcss/typography</code> plugin is our attempt to give you what you <em>actually</em> want, without any of the downsides of doing something stupid like disabling our base styles.</p>
      <p>It adds a new <code>prose</code> class that you can slap on any block of vanilla HTML content and turn it into a beautiful, well-formatted document:</p>
      <div data-rehype-pretty-code-fragment=""><pre tabindex="0" data-language="html" data-theme="default" style="background-color: rgb(36, 41, 46);"><code data-language="html" data-theme="default"><span data-line=""><span style="color: rgb(225, 228, 232);">&lt;</span><span style="color: rgb(133, 232, 157);">article</span><span style="color: rgb(225, 228, 232);"> </span><span style="color: rgb(179, 146, 240);">className</span><span style="color: rgb(225, 228, 232);">=</span><span style="color: rgb(158, 203, 255);">"prose"</span><span style="color: rgb(225, 228, 232);">&gt;</span></span>
      <span data-line=""><span style="color: rgb(225, 228, 232);">  &lt;</span><span style="color: rgb(133, 232, 157);">h1</span><span style="color: rgb(225, 228, 232);">&gt;Garlic bread with cheese: What the science tells us&lt;/</span><span style="color: rgb(133, 232, 157);">h1</span><span style="color: rgb(225, 228, 232);">&gt;</span></span>
      <span data-line=""><span style="color: rgb(225, 228, 232);">  &lt;</span><span style="color: rgb(133, 232, 157);">p</span><span style="color: rgb(225, 228, 232);">&gt;</span></span>
      <span data-line=""><span style="color: rgb(225, 228, 232);">    For years parents have espoused the health benefits of eating garlic bread</span></span>
      <span data-line=""><span style="color: rgb(225, 228, 232);">    with cheese to their children, with the food earning such an iconic status</span></span>
      <span data-line=""><span style="color: rgb(225, 228, 232);">    in our culture that kids will often dress up as warm, cheesy loaf for</span></span>
      <span data-line=""><span style="color: rgb(225, 228, 232);">    Halloween.</span></span>
      <span data-line=""><span style="color: rgb(225, 228, 232);">  &lt;/</span><span style="color: rgb(133, 232, 157);">p</span><span style="color: rgb(225, 228, 232);">&gt;</span></span>
      <span data-line=""><span style="color: rgb(225, 228, 232);">  &lt;</span><span style="color: rgb(133, 232, 157);">p</span><span style="color: rgb(225, 228, 232);">&gt;</span></span>
      <span data-line=""><span style="color: rgb(225, 228, 232);">    But a recent study shows that the celebrated appetizer may be linked to a</span></span>
      <span data-line=""><span style="color: rgb(225, 228, 232);">    series of rabies cases springing up around the country.</span></span>
      <span data-line=""><span style="color: rgb(225, 228, 232);">  &lt;/</span><span style="color: rgb(133, 232, 157);">p</span><span style="color: rgb(225, 228, 232);">&gt;</span></span>
      <span data-line=""><span style="color: rgb(225, 228, 232);">&lt;/</span><span style="color: rgb(133, 232, 157);">article</span><span style="color: rgb(225, 228, 232);">&gt;</span></span></code></pre></div>
      <p>For more information about how to use the plugin and the features it includes, <a href="https://github.com/tailwindcss/typography/blob/master/README.md">read the documentation</a>.</p>
      <hr>
      <h2 id="what-to-expect-from-here-on-out">What to expect from here on out<a aria-hidden="true" tabindex="-1" href="#what-to-expect-from-here-on-out"><span class="icon icon-link"></span></a></h2>
      <p>What follows from here is just a bunch of absolute nonsense I've written to dogfood the plugin itself. It includes every sensible typographic element I could think of, like <strong>bold text</strong>, unordered lists, ordered lists, code blocks, block quotes, <em>and even italics</em>.</p>
      <p>It's important to cover all of these use cases for a few reasons:</p>
      <ol>
      <li>We want everything to look good out of the box.</li>
      <li>Really just the first reason, that's the whole point of the plugin.</li>
      <li>Here's a third pretend reason though a list with three items looks more realistic than a list with two items.</li>
      </ol>
      <p>Now we're going to try out another header style.</p>
      <h3 id="typography-should-be-easy">Typography should be easy<a aria-hidden="true" tabindex="-1" href="#typography-should-be-easy"><span class="icon icon-link"></span></a></h3>
      <p>So that's a header for you — with any luck if we've done our job correctly that will look pretty reasonable.</p>
      <p>Something a wise person once told me about typography is:</p>
      <blockquote>
      <p>Typography is pretty important if you don't want your stuff to look like trash. Make it good then it won't be bad.</p>
      </blockquote>
      <p>It's probably important that images look okay here by default as well:</p>
      <img alt="Image" loading="lazy" width="718" height="404" decoding="async" data-nimg="1" sizes="100vw" srcset="/_next/image?url=/blogs/c-d-x-PDX_a_82obo-unsplash.webp&amp;w=640&amp;q=75 640w, /_next/image?url=/blogs/c-d-x-PDX_a_82obo-unsplash.webp&amp;w=750&amp;q=75 750w, /_next/image?url=/blogs/c-d-x-PDX_a_82obo-unsplash.webp&amp;w=828&amp;q=75 828w, /_next/image?url=/blogs/c-d-x-PDX_a_82obo-unsplash.webp&amp;w=1080&amp;q=75 1080w, /_next/image?url=/blogs/c-d-x-PDX_a_82obo-unsplash.webp&amp;w=1200&amp;q=75 1200w, /_next/image?url=/blogs/c-d-x-PDX_a_82obo-unsplash.webp&amp;w=1920&amp;q=75 1920w, /_next/image?url=/blogs/c-d-x-PDX_a_82obo-unsplash.webp&amp;w=2048&amp;q=75 2048w, /_next/image?url=/blogs/c-d-x-PDX_a_82obo-unsplash.webp&amp;w=3840&amp;q=75 3840w" src="/_next/image?url=/blogs/c-d-x-PDX_a_82obo-unsplash.webp&amp;w=3840&amp;q=75" style="color: transparent;">
      <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
      <p>Now I'm going to show you an example of an unordered list to make sure that looks good, too:</p>
      <ul>
      <li>So here is the first item in this list.</li>
      <li>In this example we're keeping the items short.</li>
      <li>Later, we'll use longer, more complex list items.</li>
      </ul>
      <p>And that's the end of this section.</p>
      <h2 id="what-if-we-stack-headings">What if we stack headings?<a aria-hidden="true" tabindex="-1" href="#what-if-we-stack-headings"><span class="icon icon-link"></span></a></h2>
      <h3 id="we-should-make-sure-that-looks-good-too">We should make sure that looks good, too.<a aria-hidden="true" tabindex="-1" href="#we-should-make-sure-that-looks-good-too"><span class="icon icon-link"></span></a></h3>
      <p>Sometimes you have headings directly underneath each other. In those cases you often have to undo the top margin on the second heading because it usually looks better for the headings to be closer together than a paragraph followed by a heading should be.</p>
      <h3 id="when-a-heading-comes-after-a-paragraph-">When a heading comes after a paragraph …<a aria-hidden="true" tabindex="-1" href="#when-a-heading-comes-after-a-paragraph-"><span class="icon icon-link"></span></a></h3>
      <p>When a heading comes after a paragraph, we need a bit more space, like I already mentioned above. Now let's see what a more complex list would look like.</p>
      <ul>
      <li>
      <p><strong>I often do this thing where list items have headings.</strong></p>
      <p>For some reason I think this looks cool which is unfortunate because it's pretty annoying to get the styles right.</p>
      <p>I often have two or three paragraphs in these list items, too, so the hard part is getting the spacing between the paragraphs, list item heading, and separate list items to all make sense. Pretty tough honestly, you could make a strong argument that you just shouldn't write this way.</p>
      </li>
      <li>
      <p><strong>Since this is a list, I need at least two items.</strong></p>
      <p>I explained what I'm doing already in the previous list item, but a list wouldn't be a list if it only had one item, and we really want this to look realistic. That's why I've added this second list item so I actually have something to look at when writing the styles.</p>
      </li>
      <li>
      <p><strong>It's not a bad idea to add a third item either.</strong></p>
      <p>I think it probably would've been fine to just use two items but three is definitely not worse, and since I seem to be having no trouble making up arbitrary things to type, I might as well include it.</p>
      </li>
      </ul>
      <p>After this sort of list I usually have a closing statement or paragraph, because it kinda looks weird jumping right to a heading.</p>
      <h2 id="code-should-look-okay-by-default">Code should look okay by default.<a aria-hidden="true" tabindex="-1" href="#code-should-look-okay-by-default"><span class="icon icon-link"></span></a></h2>
      <p>I think most people are going to use <a href="https://highlightjs.org/">highlight.js</a> or <a href="https://prismjs.com/">Prism</a> or something if they want to style their code blocks but it wouldn't hurt to make them look <em>okay</em> out of the box, even with no syntax highlighting.</p>
      <p>Here's what a default <code>tailwind.config.js</code> file looks like at the time of writing:</p>
      <div data-rehype-pretty-code-fragment=""><pre tabindex="0" data-language="js" data-theme="default" style="background-color: rgb(36, 41, 46);"><code data-language="js" data-theme="default"><span data-line=""><span style="color: rgb(121, 184, 255);">module</span><span style="color: rgb(225, 228, 232);">.</span><span style="color: rgb(121, 184, 255);">exports</span><span style="color: rgb(225, 228, 232);"> </span><span style="color: rgb(249, 117, 131);">=</span><span style="color: rgb(225, 228, 232);"> {</span></span>
      <span data-line=""><span style="color: rgb(225, 228, 232);">  purge: [],</span></span>
      <span data-line=""><span style="color: rgb(225, 228, 232);">  theme: {</span></span>
      <span data-line=""><span style="color: rgb(225, 228, 232);">    extend: {},</span></span>
      <span data-line=""><span style="color: rgb(225, 228, 232);">  },</span></span>
      <span data-line=""><span style="color: rgb(225, 228, 232);">  variants: {},</span></span>
      <span data-line=""><span style="color: rgb(225, 228, 232);">  plugins: [],</span></span>
      <span data-line=""><span style="color: rgb(225, 228, 232);">};</span></span></code></pre></div>
      <p>Hopefully that looks good enough to you.</p>
      <h3 id="what-about-nested-lists">What about nested lists?<a aria-hidden="true" tabindex="-1" href="#what-about-nested-lists"><span class="icon icon-link"></span></a></h3>
      <p>Nested lists basically always look bad which is why editors like Medium don't even let you do it, but I guess since some of you goofballs are going to do it we have to carry the burden of at least making it work.</p>
      <ol>
      <li><strong>Nested lists are rarely a good idea.</strong>
      <ul>
      <li>You might feel like you are being really "organized" or something but you are just creating a gross shape on the screen that is hard to read.</li>
      <li>Nested navigation in UIs is a bad idea too, keep things as flat as possible.</li>
      <li>Nesting tons of folders in your source code is also not helpful.</li>
      </ul>
      </li>
      <li><strong>Since we need to have more items, here's another one.</strong>
      <ul>
      <li>I'm not sure if we'll bother styling more than two levels deep.</li>
      <li>Two is already too much, three is guaranteed to be a bad idea.</li>
      <li>If you nest four levels deep you belong in prison.</li>
      </ul>
      </li>
      <li><strong>Two items isn't really a list, three is good though.</strong>
      <ul>
      <li>Again please don't nest lists if you want people to actually read your content.</li>
      <li>Nobody wants to look at this.</li>
      <li>I'm upset that we even have to bother styling this.</li>
      </ul>
      </li>
      </ol>
      <p>The most annoying thing about lists in Markdown is that <code>&lt;li&gt;</code> elements aren't given a child <code>&lt;p&gt;</code> tag unless there are multiple paragraphs in the list item. That means I have to worry about styling that annoying situation too.</p>
      <ul>
      <li>
      <p><strong>For example, here's another nested list.</strong></p>
      <p>But this time with a second paragraph.</p>
      <ul>
      <li>These list items won't have <code>&lt;p&gt;</code> tags</li>
      <li>Because they are only one line each</li>
      </ul>
      </li>
      <li>
      <p><strong>But in this second top-level list item, they will.</strong></p>
      <p>This is especially annoying because of the spacing on this paragraph.</p>
      <ul>
      <li>
      <p>As you can see here, because I've added a second line, this list item now has a <code>&lt;p&gt;</code> tag.</p>
      <p>This is the second line I'm talking about by the way.</p>
      </li>
      <li>
      <p>Finally here's another list item so it's more like a list.</p>
      </li>
      </ul>
      </li>
      <li>
      <p>A closing list item, but with no nested list, because why not?</p>
      </li>
      </ul>
      <p>And finally a sentence to close off this section.</p>
      <h2 id="there-are-other-elements-we-need-to-style">There are other elements we need to style<a aria-hidden="true" tabindex="-1" href="#there-are-other-elements-we-need-to-style"><span class="icon icon-link"></span></a></h2>
      <p>I almost forgot to mention links, like <a href="https://tailwindcss.com">this link to the Tailwind CSS website</a>. We almost made them blue but that's so yesterday, so we went with dark gray, feels edgier.</p>
      <p>We even included table styles, check it out:</p>
      <table><thead><tr><th>Wrestler</th><th>Origin</th><th>Finisher</th></tr></thead><tbody><tr><td>Bret "The Hitman" Hart</td><td>Calgary, AB</td><td>Sharpshooter</td></tr><tr><td>Stone Cold Steve Austin</td><td>Austin, TX</td><td>Stone Cold Stunner</td></tr><tr><td>Randy Savage</td><td>Sarasota, FL</td><td>Elbow Drop</td></tr><tr><td>Vader</td><td>Boulder, CO</td><td>Vader Bomb</td></tr><tr><td>Razor Ramon</td><td>Chuluota, FL</td><td>Razor's Edge</td></tr></tbody></table>
      <p>We also need to make sure inline code looks good, like if I wanted to talk about <code>&lt;span&gt;</code> elements or tell you the good news about <code>@tailwindcss/typography</code>.</p>
      <h3 id="sometimes-i-even-use-code-in-headings">Sometimes I even use <code>code</code> in headings<a aria-hidden="true" tabindex="-1" href="#sometimes-i-even-use-code-in-headings"><span class="icon icon-link"></span></a></h3>
      <p>Even though it's probably a bad idea, and historically I've had a hard time making it look good. This <em>"wrap the code blocks in backticks"</em> trick works pretty well though really.</p>
      <p>Another thing I've done in the past is put a <code>code</code> tag inside of a link, like if I wanted to tell you about the <a href="https://github.com/tailwindcss/docs"><code>tailwindcss/docs</code></a> repository. I don't love that there is an underline below the backticks but it is absolutely not worth the madness it would require to avoid it.</p>
      <h4 id="we-havent-used-an-h4-yet">We haven't used an <code>h4</code> yet<a aria-hidden="true" tabindex="-1" href="#we-havent-used-an-h4-yet"><span class="icon icon-link"></span></a></h4>
      <p>But now we have. Please don't use <code>h5</code> or <code>h6</code> in your content, Medium only supports two heading levels for a reason, you animals. I honestly considered using a <code>before</code> pseudo-element to scream at you if you use an <code>h5</code> or <code>h6</code>.</p>
      <p>We don't style them at all out of the box because <code>h4</code> elements are already so small that they are the same size as the body copy. What are we supposed to do with an <code>h5</code>, make it <em>smaller</em> than the body copy? No thanks.</p>
      <h3 id="we-still-need-to-think-about-stacked-headings-though">We still need to think about stacked headings though.<a aria-hidden="true" tabindex="-1" href="#we-still-need-to-think-about-stacked-headings-though"><span class="icon icon-link"></span></a></h3>
      <h4 id="lets-make-sure-we-dont-screw-that-up-with-h4-elements-either">Let's make sure we don't screw that up with <code>h4</code> elements, either.<a aria-hidden="true" tabindex="-1" href="#lets-make-sure-we-dont-screw-that-up-with-h4-elements-either"><span class="icon icon-link"></span></a></h4>
      <p>Phew, with any luck we have styled the headings above this text and they look pretty good.</p>
      <p>Let's add a closing paragraph here so things end with a decently sized block of text. I can't explain why I want things to end that way but I have to assume it's because I think things will look weird or unbalanced if there is a heading too close to the end of the document.</p>
      <p>What I've written here is probably long enough, but adding this final sentence can't hurt.</p>
      <h2 id="github-flavored-markdown">GitHub Flavored Markdown<a aria-hidden="true" tabindex="-1" href="#github-flavored-markdown"><span class="icon icon-link"></span></a></h2>
      <p>I've also added support for GitHub Flavored Mardown using <code>remark-gfm</code>.</p>
      <p>With <code>remark-gfm</code>, we get a few extra features in our markdown. Example: autolink literals.</p>
      <p>A link like <a href="http://www.example.com">www.example.com</a> or <a href="https://example.com">https://example.com</a> would automatically be converted into an <code>a</code> tag.</p>
      <p>This works for email links too: <a href="mailto:contact@example.com">contact@example.com</a>.</p>`,
      image: 'emile-perron-xrVDYZRGdw4-unsplash.webp',
      created_at: 'January 1, 2023',
      view: 1811,
      time: 10
    },
    blog_topics : [
      {
        id: 1,
        title: 'What to expect from here on out',
        sub_title: [
          {
            sub_id: 1,
            title : 'Typography should be easy',
          }
        ]
      },
      {
        id: 2,
        title: 'What if we stack headings?',
       sub_title: [
          {
            sub_id: 1,
            title : 'We should make sure that looks good, too.'
          },
          {
            sub_id: 2,
            title : 'When a heading comes after a paragraph …'
          }
        ]
      },
      {
        id: 3,
        title: 'Code should look okay by default.',
       sub_title: [
          {
            sub_id: 1,
            title : 'What about nested lists?'
          }
        ]
      },
      {
        id: 4,
        title: 'There are other elements we need to style',
       sub_title: [
          {
            sub_id: 1,
            title : 'Sometimes I even use `code` in headings'
          },
          {
            sub_id: 2,
            title : "We haven't used an `h4` yet"
          },
          {
            sub_id: 3,
            title : 'We still need to think about stacked headings though.'
          },
          {
            sub_id: 4,
            title : "Let's make sure we don't screw that up with `h4` elements, either."
          }
        ]
      },
      {
        id: 4,
        title: 'GitHub Flavored Markdown',
       sub_title: [
        ]
      }
    ]
  },

  // Blog 3
  {
    blog_types : {
      blog_category_id : 4,
      blog_category_name: 'Code Quality',
      blog_category_slug: 'code-quality',
    },
    blog_contents : {
      id : 3,
      title: 'Best Practices For Writing Clean And Maintainable Code',
      description: '',
      content: `<p>Until now, trying to style an article, document, or blog post with Tailwind has been a tedious task that required a keen eye for typography and a lot of complex custom CSS.</p>
      <p>By default, Tailwind removes all of the default browser styling from paragraphs, headings, lists and more. This ends up being really useful for building application UIs because you spend less time undoing user-agent styles, but when you <em>really are</em> just trying to style some content that came from a rich-text editor in a CMS or a markdown file, it can be surprising and unintuitive.</p>
      <p>We get lots of complaints about it actually, with people regularly asking us things like:</p>
      <blockquote>
      <p>Why is Tailwind removing the default styles on my <code>h1</code> elements? How do I disable this? What do you mean I lose all the other base styles too?
      We hear you, but we're not convinced that simply disabling our base styles is what you really want. You don't want to have to remove annoying margins every time you use a <code>p</code> element in a piece of your dashboard UI. And I doubt you really want your blog posts to use the user-agent styles either — you want them to look <em>awesome</em>, not awful.</p>
      </blockquote>
      <p>The <code>@tailwindcss/typography</code> plugin is our attempt to give you what you <em>actually</em> want, without any of the downsides of doing something stupid like disabling our base styles.</p>
      <p>It add a new <code>prose</code> class that you can slap on any block of vanilla HTML content and turn it into a beautiful, well-formatted document:</p>
      <div data-rehype-pretty-code-fragment=""><pre tabindex="0" data-language="html" data-theme="default" style="background-color: rgb(36, 41, 46);"><code data-language="html" data-theme="default"><span data-line=""><span style="color: rgb(225, 228, 232);">&lt;</span><span style="color: rgb(133, 232, 157);">article</span><span style="color: rgb(225, 228, 232);"> </span><span style="color: rgb(179, 146, 240);">className</span><span style="color: rgb(225, 228, 232);">=</span><span style="color: rgb(158, 203, 255);">"prose"</span><span style="color: rgb(225, 228, 232);">&gt;</span></span>
      <span data-line=""><span style="color: rgb(225, 228, 232);">  &lt;</span><span style="color: rgb(133, 232, 157);">h1</span><span style="color: rgb(225, 228, 232);">&gt;Garlic bread with cheese: What the science tells us&lt;/</span><span style="color: rgb(133, 232, 157);">h1</span><span style="color: rgb(225, 228, 232);">&gt;</span></span>
      <span data-line=""><span style="color: rgb(225, 228, 232);">  &lt;</span><span style="color: rgb(133, 232, 157);">p</span><span style="color: rgb(225, 228, 232);">&gt;</span></span>
      <span data-line=""><span style="color: rgb(225, 228, 232);">    For years parents have espoused the health benefits of eating garlic bread</span></span>
      <span data-line=""><span style="color: rgb(225, 228, 232);">    with cheese to their children, with the food earning such an iconic status</span></span>
      <span data-line=""><span style="color: rgb(225, 228, 232);">    in our culture that kids will often dress up as warm, cheesy loaf for</span></span>
      <span data-line=""><span style="color: rgb(225, 228, 232);">    Halloween.</span></span>
      <span data-line=""><span style="color: rgb(225, 228, 232);">  &lt;/</span><span style="color: rgb(133, 232, 157);">p</span><span style="color: rgb(225, 228, 232);">&gt;</span></span>
      <span data-line=""><span style="color: rgb(225, 228, 232);">  &lt;</span><span style="color: rgb(133, 232, 157);">p</span><span style="color: rgb(225, 228, 232);">&gt;</span></span>
      <span data-line=""><span style="color: rgb(225, 228, 232);">    But a recent study shows that the celebrated appetizer may be linked to a</span></span>
      <span data-line=""><span style="color: rgb(225, 228, 232);">    series of rabies cases springing up around the country.</span></span>
      <span data-line=""><span style="color: rgb(225, 228, 232);">  &lt;/</span><span style="color: rgb(133, 232, 157);">p</span><span style="color: rgb(225, 228, 232);">&gt;</span></span>
      <span data-line=""><span style="color: rgb(225, 228, 232);">&lt;/</span><span style="color: rgb(133, 232, 157);">article</span><span style="color: rgb(225, 228, 232);">&gt;</span></span></code></pre></div>
      <p>For more information about how to use the plugin and the features it includes, <a href="https://github.com/tailwindcss/typography/blob/master/README.md">read the documentation</a>.</p>
      <hr>
      <h2 id="what-to-expect-from-here-on-out">What to expect from here on out<a aria-hidden="true" tabindex="-1" href="#what-to-expect-from-here-on-out"><span class="icon icon-link"></span></a></h2>
      <p>What follows from here is just a bunch of absolute nonsense I've written to dogfood the plugin itself. It includes every sensible typographic element I could think of, like <strong>bold text</strong>, unordered lists, ordered lists, code blocks, block quotes, <em>and even italics</em>.</p>
      <p>It's important to cover all of these use cases for a few reasons:</p>
      <ol>
      <li>We want everything to look good out of the box.</li>
      <li>Really just the first reason, that's the whole point of the plugin.</li>
      <li>Here's a third pretend reason though a list with three items looks more realistic than a list with two items.</li>
      </ol>
      <p>Now we're going to try out another header style.</p>
      <h3 id="typography-should-be-easy">Typography should be easy<a aria-hidden="true" tabindex="-1" href="#typography-should-be-easy"><span class="icon icon-link"></span></a></h3>
      <p>So that's a header for you — with any luck if we've done our job correctly that will look pretty reasonable.</p>
      <p>Something a wise person once told me about typography is:</p>
      <blockquote>
      <p>Typography is pretty important if you don't want your stuff to look like trash. Make it good then it won't be bad.</p>
      </blockquote>
      <p>It's probably important that images look okay here by default as well:</p>
      <img alt="Image" loading="lazy" width="718" height="404" decoding="async" data-nimg="1" sizes="100vw" srcset="/_next/image?url=/blogs/roman-synkevych-vXInUOv1n84-unsplash.webp&amp;w=640&amp;q=75 640w, /_next/image?url=/blogs/roman-synkevych-vXInUOv1n84-unsplash.webp&amp;w=750&amp;q=75 750w, /_next/image?url=/blogs/roman-synkevych-vXInUOv1n84-unsplash.webp&amp;w=828&amp;q=75 828w, /_next/image?url=/blogs/roman-synkevych-vXInUOv1n84-unsplash.webp&amp;w=1080&amp;q=75 1080w, /_next/image?url=/blogs/roman-synkevych-vXInUOv1n84-unsplash.webp&amp;w=1200&amp;q=75 1200w, /_next/image?url=/blogs/roman-synkevych-vXInUOv1n84-unsplash.webp&amp;w=1920&amp;q=75 1920w, /_next/image?url=/blogs/roman-synkevych-vXInUOv1n84-unsplash.webp&amp;w=2048&amp;q=75 2048w, /_next/image?url=/blogs/roman-synkevych-vXInUOv1n84-unsplash.webp&amp;w=3840&amp;q=75 3840w" src="/_next/image?url=/blogs/roman-synkevych-vXInUOv1n84-unsplash.webp&amp;w=3840&amp;q=75" style="color: transparent;">
      <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
      <p>Now I'm going to show you an example of an unordered list to make sure that looks good, too:</p>
      <ul>
      <li>So here is the first item in this list.</li>
      <li>In this example we're keeping the items short.</li>
      <li>Later, we'll use longer, more complex list items.</li>
      </ul>
      <p>And that's the end of this section.</p>
      <h2 id="what-if-we-stack-headings">What if we stack headings?<a aria-hidden="true" tabindex="-1" href="#what-if-we-stack-headings"><span class="icon icon-link"></span></a></h2>
      <h3 id="we-should-make-sure-that-looks-good-too">We should make sure that looks good, too.<a aria-hidden="true" tabindex="-1" href="#we-should-make-sure-that-looks-good-too"><span class="icon icon-link"></span></a></h3>
      <p>Sometimes you have headings directly underneath each other. In those cases you often have to undo the top margin on the second heading because it usually looks better for the headings to be closer together than a paragraph followed by a heading should be.</p>
      <h3 id="when-a-heading-comes-after-a-paragraph-">When a heading comes after a paragraph …<a aria-hidden="true" tabindex="-1" href="#when-a-heading-comes-after-a-paragraph-"><span class="icon icon-link"></span></a></h3>
      <p>When a heading comes after a paragraph, we need a bit more space, like I already mentioned above. Now let's see what a more complex list would look like.</p>
      <ul>
      <li>
      <p><strong>I often do this thing where list items have headings.</strong></p>
      <p>For some reason I think this looks cool which is unfortunate because it's pretty annoying to get the styles right.</p>
      <p>I often have two or three paragraphs in these list items, too, so the hard part is getting the spacing between the paragraphs, list item heading, and separate list items to all make sense. Pretty tough honestly, you could make a strong argument that you just shouldn't write this way.</p>
      </li>
      <li>
      <p><strong>Since this is a list, I need at least two items.</strong></p>
      <p>I explained what I'm doing already in the previous list item, but a list wouldn't be a list if it only had one item, and we really want this to look realistic. That's why I've added this second list item so I actually have something to look at when writing the styles.</p>
      </li>
      <li>
      <p><strong>It's not a bad idea to add a third item either.</strong></p>
      <p>I think it probably would've been fine to just use two items but three is definitely not worse, and since I seem to be having no trouble making up arbitrary things to type, I might as well include it.</p>
      </li>
      </ul>
      <p>After this sort of list I usually have a closing statement or paragraph, because it kinda looks weird jumping right to a heading.</p>
      <h2 id="code-should-look-okay-by-default">Code should look okay by default.<a aria-hidden="true" tabindex="-1" href="#code-should-look-okay-by-default"><span class="icon icon-link"></span></a></h2>
      <p>I think most people are going to use <a href="https://highlightjs.org/">highlight.js</a> or <a href="https://prismjs.com/">Prism</a> or something if they want to style their code blocks but it wouldn't hurt to make them look <em>okay</em> out of the box, even with no syntax highlighting.</p>
      <p>Here's what a default <code>tailwind.config.js</code> file looks like at the time of writing:</p>
      <div data-rehype-pretty-code-fragment=""><pre tabindex="0" data-language="js" data-theme="default" style="background-color: rgb(36, 41, 46);"><code data-language="js" data-theme="default"><span data-line=""><span style="color: rgb(121, 184, 255);">module</span><span style="color: rgb(225, 228, 232);">.</span><span style="color: rgb(121, 184, 255);">exports</span><span style="color: rgb(225, 228, 232);"> </span><span style="color: rgb(249, 117, 131);">=</span><span style="color: rgb(225, 228, 232);"> {</span></span>
      <span data-line=""><span style="color: rgb(225, 228, 232);">  purge: [],</span></span>
      <span data-line=""><span style="color: rgb(225, 228, 232);">  theme: {</span></span>
      <span data-line=""><span style="color: rgb(225, 228, 232);">    extend: {},</span></span>
      <span data-line=""><span style="color: rgb(225, 228, 232);">  },</span></span>
      <span data-line=""><span style="color: rgb(225, 228, 232);">  variants: {},</span></span>
      <span data-line=""><span style="color: rgb(225, 228, 232);">  plugins: [],</span></span>
      <span data-line=""><span style="color: rgb(225, 228, 232);">}</span></span></code></pre></div>
      <p>Hopefully that looks good enough to you.</p>
      <h3 id="what-about-nested-lists">What about nested lists?<a aria-hidden="true" tabindex="-1" href="#what-about-nested-lists"><span class="icon icon-link"></span></a></h3>
      <p>Nested lists basically always look bad which is why editors like Medium don't even let you do it, but I guess since some of you goofballs are going to do it we have to carry the burden of at least making it work.</p>
      <ol>
      <li><strong>Nested lists are rarely a good idea.</strong>
      <ul>
      <li>You might feel like you are being really "organized" or something but you are just creating a gross shape on the screen that is hard to read.</li>
      <li>Nested navigation in UIs is a bad idea too, keep things as flat as possible.</li>
      <li>Nesting tons of folders in your source code is also not helpful.</li>
      </ul>
      </li>
      <li><strong>Since we need to have more items, here's another one.</strong>
      <ul>
      <li>I'm not sure if we'll bother styling more than two levels deep.</li>
      <li>Two is already too much, three is guaranteed to be a bad idea.</li>
      <li>If you nest four levels deep you belong in prison.</li>
      </ul>
      </li>
      <li><strong>Two items isn't really a list, three is good though.</strong>
      <ul>
      <li>Again please don't nest lists if you want people to actually read your content.</li>
      <li>Nobody wants to look at this.</li>
      <li>I'm upset that we even have to bother styling this.</li>
      </ul>
      </li>
      </ol>
      <p>The most annoying thing about lists in Markdown is that <code>&lt;li&gt;</code> elements aren't given a child <code>&lt;p&gt;</code> tag unless there are multiple paragraphs in the list item. That means I have to worry about styling that annoying situation too.</p>
      <ul>
      <li>
      <p><strong>For example, here's another nested list.</strong></p>
      <p>But this time with a second paragraph.</p>
      <ul>
      <li>These list items won't have <code>&lt;p&gt;</code> tags</li>
      <li>Because they are only one line each</li>
      </ul>
      </li>
      <li>
      <p><strong>But in this second top-level list item, they will.</strong></p>
      <p>This is especially annoying because of the spacing on this paragraph.</p>
      <ul>
      <li>
      <p>As you can see here, because I've added a second line, this list item now has a <code>&lt;p&gt;</code> tag.</p>
      <p>This is the second line I'm talking about by the way.</p>
      </li>
      <li>
      <p>Finally here's another list item so it's more like a list.</p>
      </li>
      </ul>
      </li>
      <li>
      <p>A closing list item, but with no nested list, because why not?</p>
      </li>
      </ul>
      <p>And finally a sentence to close off this section.</p>
      <h2 id="there-are-other-elements-we-need-to-style">There are other elements we need to style<a aria-hidden="true" tabindex="-1" href="#there-are-other-elements-we-need-to-style"><span class="icon icon-link"></span></a></h2>
      <p>I almost forgot to mention links, like <a href="https://tailwindcss.com">this link to the Tailwind CSS website</a>. We almost made them blue but that's so yesterday, so we went with dark gray, feels edgier.</p>
      <p>We even included table styles, check it out:</p>
      <table><thead><tr><th>Wrestler</th><th>Origin</th><th>Finisher</th></tr></thead><tbody><tr><td>Bret "The Hitman" Hart</td><td>Calgary, AB</td><td>Sharpshooter</td></tr><tr><td>Stone Cold Steve Austin</td><td>Austin, TX</td><td>Stone Cold Stunner</td></tr><tr><td>Randy Savage</td><td>Sarasota, FL</td><td>Elbow Drop</td></tr><tr><td>Vader</td><td>Boulder, CO</td><td>Vader Bomb</td></tr><tr><td>Razor Ramon</td><td>Chuluota, FL</td><td>Razor's Edge</td></tr></tbody></table>
      <p>We also need to make sure inline code looks good, like if I wanted to talk about <code>&lt;span&gt;</code> elements or tell you the good news about <code>@tailwindcss/typography</code>.</p>
      <h3 id="sometimes-i-even-use-code-in-headings">Sometimes I even use <code>code</code> in headings<a aria-hidden="true" tabindex="-1" href="#sometimes-i-even-use-code-in-headings"><span class="icon icon-link"></span></a></h3>
      <p>Even though it's probably a bad idea, and historically I've had a hard time making it look good. This <em>"wrap the code blocks in backticks"</em> trick works pretty well though really.</p>
      <p>Another thing I've done in the past is put a <code>code</code> tag inside of a link, like if I wanted to tell you about the <a href="https://github.com/tailwindcss/docs"><code>tailwindcss/docs</code></a> repository. I don't love that there is an underline below the backticks but it is absolutely not worth the madness it would require to avoid it.</p>
      <h4 id="we-havent-used-an-h4-yet">We haven't used an <code>h4</code> yet<a aria-hidden="true" tabindex="-1" href="#we-havent-used-an-h4-yet"><span class="icon icon-link"></span></a></h4>
      <p>But now we have. Please don't use <code>h5</code> or <code>h6</code> in your content, Medium only supports two heading levels for a reason, you animals. I honestly considered using a <code>before</code> pseudo-element to scream at you if you use an <code>h5</code> or <code>h6</code>.</p>
      <p>We don't style them at all out of the box because <code>h4</code> elements are already so small that they are the same size as the body copy. What are we supposed to do with an <code>h5</code>, make it <em>smaller</em> than the body copy? No thanks.</p>
      <h3 id="we-still-need-to-think-about-stacked-headings-though">We still need to think about stacked headings though.<a aria-hidden="true" tabindex="-1" href="#we-still-need-to-think-about-stacked-headings-though"><span class="icon icon-link"></span></a></h3>
      <h4 id="lets-make-sure-we-dont-screw-that-up-with-h4-elements-either">Let's make sure we don't screw that up with <code>h4</code> elements, either.<a aria-hidden="true" tabindex="-1" href="#lets-make-sure-we-dont-screw-that-up-with-h4-elements-either"><span class="icon icon-link"></span></a></h4>
      <p>Phew, with any luck we have styled the headings above this text and they look pretty good.</p>
      <p>Let's add a closing paragraph here so things end with a decently sized block of text. I can't explain why I want things to end that way but I have to assume it's because I think things will look weird or unbalanced if there is a heading too close to the end of the document.</p>
      <p>What I've written here is probably long enough, but adding this final sentence can't hurt.</p>
      <h2 id="github-flavored-markdown">GitHub Flavored Markdown<a aria-hidden="true" tabindex="-1" href="#github-flavored-markdown"><span class="icon icon-link"></span></a></h2>
      <p>I've also added support for GitHub Flavored Mardown using <code>remark-gfm</code>.</p>
      <p>With <code>remark-gfm</code>, we get a few extra features in our markdown. Example: autolink literals.</p>
      <p>A link like <a href="http://www.example.com">www.example.com</a> or <a href="https://example.com">https://example.com</a> would automatically be converted into an <code>a</code> tag.</p>
      <p>This works for email links too: <a href="mailto:contact@example.com">contact@example.com</a>.</p>`,
      image: 'roman-synkevych-vXInUOv1n84-unsplash.webp',
      created_at: 'January 1, 2023',
      view: 2845,
      time: 10
    },
    blog_topics : [
      {
        id: 1,
        title: 'What to expect from here on out',
        sub_title: [
          {
            sub_id: 1,
            title : 'Typography should be easy',
          }
        ]
      },
      {
        id: 2,
        title: 'What if we stack headings?',
       sub_title: [
          {
            sub_id: 1,
            title : 'We should make sure that looks good, too.'
          },
          {
            sub_id: 2,
            title : 'When a heading comes after a paragraph …'
          }
        ]
      },
      {
        id: 3,
        title: 'Code should look okay by default.',
       sub_title: [
          {
            sub_id: 1,
            title : 'What about nested lists?'
          }
        ]
      },
      {
        id: 4,
        title: 'There are other elements we need to style',
       sub_title: [
          {
            sub_id: 1,
            title : 'Sometimes I even use `code` in headings'
          },
          {
            sub_id: 2,
            title : "We haven't used an `h4` yet"
          },
          {
            sub_id: 3,
            title : 'We still need to think about stacked headings though.'
          },
          {
            sub_id: 4,
            title : "Let's make sure we don't screw that up with `h4` elements, either."
          }
        ]
      },
      {
        id: 4,
        title: 'GitHub Flavored Markdown',
       sub_title: [
        ]
      }
    ]
  },

   // Blog 4
   {
    blog_types : {
      blog_category_id : 6,
      blog_category_name: 'Web Development',
      blog_category_slug: 'web-development',
    },
    blog_contents : {
      id : 4,
      title: 'Building Progressive Web Apps: Bridging The Gap Between Web And Mobile',
      description: '',
      content: `<p>Until now, trying to style an article, document, or blog post with Tailwind has been a tedious task that required a keen eye for typography and a lot of complex custom CSS.</p>
      <p>By default, Tailwind removes all of the default browser styling from paragraphs, headings, lists and more. This ends up being really useful for building application UIs because you spend less time undoing user-agent styles, but when you <em>really are</em> just trying to style some content that came from a rich-text editor in a CMS or a markdown file, it can be surprising and unintuitive.</p>
      <p>We get lots of complaints about it actually, with people regularly asking us things like:</p>
      <blockquote>
      <p>Why is Tailwind removing the default styles on my <code>h1</code> elements? How do I disable this? What do you mean I lose all the other base styles too?
      We hear you, but we're not convinced that simply disabling our base styles is what you really want. You don't want to have to remove annoying margins every time you use a <code>p</code> element in a piece of your dashboard UI. And I doubt you really want your blog posts to use the user-agent styles either — you want them to look <em>awesome</em>, not awful.</p>
      </blockquote>
      <p>The <code>@tailwindcss/typography</code> plugin is our attempt to give you what you <em>actually</em> want, without any of the downsides of doing something stupid like disabling our base styles.</p>
      <p>It add a new <code>prose</code> class that you can slap on any block of vanilla HTML content and turn it into a beautiful, well-formatted document:</p>
      <div data-rehype-pretty-code-fragment=""><pre tabindex="0" data-language="html" data-theme="default" style="background-color: rgb(36, 41, 46);"><code data-language="html" data-theme="default"><span data-line=""><span style="color: rgb(225, 228, 232);">&lt;</span><span style="color: rgb(133, 232, 157);">article</span><span style="color: rgb(225, 228, 232);"> </span><span style="color: rgb(179, 146, 240);">className</span><span style="color: rgb(225, 228, 232);">=</span><span style="color: rgb(158, 203, 255);">"prose"</span><span style="color: rgb(225, 228, 232);">&gt;</span></span>
      <span data-line=""><span style="color: rgb(225, 228, 232);">  &lt;</span><span style="color: rgb(133, 232, 157);">h1</span><span style="color: rgb(225, 228, 232);">&gt;Garlic bread with cheese: What the science tells us&lt;/</span><span style="color: rgb(133, 232, 157);">h1</span><span style="color: rgb(225, 228, 232);">&gt;</span></span>
      <span data-line=""><span style="color: rgb(225, 228, 232);">  &lt;</span><span style="color: rgb(133, 232, 157);">p</span><span style="color: rgb(225, 228, 232);">&gt;</span></span>
      <span data-line=""><span style="color: rgb(225, 228, 232);">    For years parents have espoused the health benefits of eating garlic bread</span></span>
      <span data-line=""><span style="color: rgb(225, 228, 232);">    with cheese to their children, with the food earning such an iconic status</span></span>
      <span data-line=""><span style="color: rgb(225, 228, 232);">    in our culture that kids will often dress up as warm, cheesy loaf for</span></span>
      <span data-line=""><span style="color: rgb(225, 228, 232);">    Halloween.</span></span>
      <span data-line=""><span style="color: rgb(225, 228, 232);">  &lt;/</span><span style="color: rgb(133, 232, 157);">p</span><span style="color: rgb(225, 228, 232);">&gt;</span></span>
      <span data-line=""><span style="color: rgb(225, 228, 232);">  &lt;</span><span style="color: rgb(133, 232, 157);">p</span><span style="color: rgb(225, 228, 232);">&gt;</span></span>
      <span data-line=""><span style="color: rgb(225, 228, 232);">    But a recent study shows that the celebrated appetizer may be linked to a</span></span>
      <span data-line=""><span style="color: rgb(225, 228, 232);">    series of rabies cases springing up around the country.</span></span>
      <span data-line=""><span style="color: rgb(225, 228, 232);">  &lt;/</span><span style="color: rgb(133, 232, 157);">p</span><span style="color: rgb(225, 228, 232);">&gt;</span></span>
      <span data-line=""><span style="color: rgb(225, 228, 232);">&lt;/</span><span style="color: rgb(133, 232, 157);">article</span><span style="color: rgb(225, 228, 232);">&gt;</span></span></code></pre></div>
      <p>For more information about how to use the plugin and the features it includes, <a href="https://github.com/tailwindcss/typography/blob/master/README.md">read the documentation</a>.</p>
      <hr>
      <h2 id="what-to-expect-from-here-on-out">What to expect from here on out<a aria-hidden="true" tabindex="-1" href="#what-to-expect-from-here-on-out"><span class="icon icon-link"></span></a></h2>
      <p>What follows from here is just a bunch of absolute nonsense I've written to dogfood the plugin itself. It includes every sensible typographic element I could think of, like <strong>bold text</strong>, unordered lists, ordered lists, code blocks, block quotes, <em>and even italics</em>.</p>
      <p>It's important to cover all of these use cases for a few reasons:</p>
      <ol>
      <li>We want everything to look good out of the box.</li>
      <li>Really just the first reason, that's the whole point of the plugin.</li>
      <li>Here's a third pretend reason though a list with three items looks more realistic than a list with two items.</li>
      </ol>
      <p>Now we're going to try out another header style.</p>
      <h3 id="typography-should-be-easy">Typography should be easy<a aria-hidden="true" tabindex="-1" href="#typography-should-be-easy"><span class="icon icon-link"></span></a></h3>
      <p>So that's a header for you — with any luck if we've done our job correctly that will look pretty reasonable.</p>
      <p>Something a wise person once told me about typography is:</p>
      <blockquote>
      <p>Typography is pretty important if you don't want your stuff to look like trash. Make it good then it won't be bad.</p>
      </blockquote>
      <p>It's probably important that images look okay here by default as well:</p>
      <img alt="Image" loading="lazy" width="718" height="404" decoding="async" data-nimg="1" sizes="100vw" srcset="/_next/image?url=/blogs/charlesdeluvio-cZr2sgaxy3Q-unsplash.webp&amp;w=640&amp;q=75 640w, /_next/image?url=/blogs/charlesdeluvio-cZr2sgaxy3Q-unsplash.webp&amp;w=750&amp;q=75 750w, /_next/image?url=/blogs/charlesdeluvio-cZr2sgaxy3Q-unsplash.webp&amp;w=828&amp;q=75 828w, /_next/image?url=/blogs/charlesdeluvio-cZr2sgaxy3Q-unsplash.webp&amp;w=1080&amp;q=75 1080w, /_next/image?url=/blogs/charlesdeluvio-cZr2sgaxy3Q-unsplash.webp&amp;w=1200&amp;q=75 1200w, /_next/image?url=/blogs/charlesdeluvio-cZr2sgaxy3Q-unsplash.webp&amp;w=1920&amp;q=75 1920w, /_next/image?url=/blogs/charlesdeluvio-cZr2sgaxy3Q-unsplash.webp&amp;w=2048&amp;q=75 2048w, /_next/image?url=/blogs/charlesdeluvio-cZr2sgaxy3Q-unsplash.webp&amp;w=3840&amp;q=75 3840w" src="/_next/image?url=/blogs/charlesdeluvio-cZr2sgaxy3Q-unsplash.webp&amp;w=3840&amp;q=75" style="color: transparent;">
      <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
      <p>Now I'm going to show you an example of an unordered list to make sure that looks good, too:</p>
      <ul>
      <li>So here is the first item in this list.</li>
      <li>In this example we're keeping the items short.</li>
      <li>Later, we'll use longer, more complex list items.</li>
      </ul>
      <p>And that's the end of this section.</p>
      <h2 id="what-if-we-stack-headings">What if we stack headings?<a aria-hidden="true" tabindex="-1" href="#what-if-we-stack-headings"><span class="icon icon-link"></span></a></h2>
      <h3 id="we-should-make-sure-that-looks-good-too">We should make sure that looks good, too.<a aria-hidden="true" tabindex="-1" href="#we-should-make-sure-that-looks-good-too"><span class="icon icon-link"></span></a></h3>
      <p>Sometimes you have headings directly underneath each other. In those cases you often have to undo the top margin on the second heading because it usually looks better for the headings to be closer together than a paragraph followed by a heading should be.</p>
      <h3 id="when-a-heading-comes-after-a-paragraph-">When a heading comes after a paragraph …<a aria-hidden="true" tabindex="-1" href="#when-a-heading-comes-after-a-paragraph-"><span class="icon icon-link"></span></a></h3>
      <p>When a heading comes after a paragraph, we need a bit more space, like I already mentioned above. Now let's see what a more complex list would look like.</p>
      <ul>
      <li>
      <p><strong>I often do this thing where list items have headings.</strong></p>
      <p>For some reason I think this looks cool which is unfortunate because it's pretty annoying to get the styles right.</p>
      <p>I often have two or three paragraphs in these list items, too, so the hard part is getting the spacing between the paragraphs, list item heading, and separate list items to all make sense. Pretty tough honestly, you could make a strong argument that you just shouldn't write this way.</p>
      </li>
      <li>
      <p><strong>Since this is a list, I need at least two items.</strong></p>
      <p>I explained what I'm doing already in the previous list item, but a list wouldn't be a list if it only had one item, and we really want this to look realistic. That's why I've added this second list item so I actually have something to look at when writing the styles.</p>
      </li>
      <li>
      <p><strong>It's not a bad idea to add a third item either.</strong></p>
      <p>I think it probably would've been fine to just use two items but three is definitely not worse, and since I seem to be having no trouble making up arbitrary things to type, I might as well include it.</p>
      </li>
      </ul>
      <p>After this sort of list I usually have a closing statement or paragraph, because it kinda looks weird jumping right to a heading.</p>
      <h2 id="code-should-look-okay-by-default">Code should look okay by default.<a aria-hidden="true" tabindex="-1" href="#code-should-look-okay-by-default"><span class="icon icon-link"></span></a></h2>
      <p>I think most people are going to use <a href="https://highlightjs.org/">highlight.js</a> or <a href="https://prismjs.com/">Prism</a> or something if they want to style their code blocks but it wouldn't hurt to make them look <em>okay</em> out of the box, even with no syntax highlighting.</p>
      <p>Here's what a default <code>tailwind.config.js</code> file looks like at the time of writing:</p>
      <div data-rehype-pretty-code-fragment=""><pre tabindex="0" data-language="js" data-theme="default" style="background-color: rgb(36, 41, 46);"><code data-language="js" data-theme="default"><span data-line=""><span style="color: rgb(121, 184, 255);">module</span><span style="color: rgb(225, 228, 232);">.</span><span style="color: rgb(121, 184, 255);">exports</span><span style="color: rgb(225, 228, 232);"> </span><span style="color: rgb(249, 117, 131);">=</span><span style="color: rgb(225, 228, 232);"> {</span></span>
      <span data-line=""><span style="color: rgb(225, 228, 232);">  purge: [],</span></span>
      <span data-line=""><span style="color: rgb(225, 228, 232);">  theme: {</span></span>
      <span data-line=""><span style="color: rgb(225, 228, 232);">    extend: {},</span></span>
      <span data-line=""><span style="color: rgb(225, 228, 232);">  },</span></span>
      <span data-line=""><span style="color: rgb(225, 228, 232);">  variants: {},</span></span>
      <span data-line=""><span style="color: rgb(225, 228, 232);">  plugins: [],</span></span>
      <span data-line=""><span style="color: rgb(225, 228, 232);">}</span></span></code></pre></div>
      <p>Hopefully that looks good enough to you.</p>
      <h3 id="what-about-nested-lists">What about nested lists?<a aria-hidden="true" tabindex="-1" href="#what-about-nested-lists"><span class="icon icon-link"></span></a></h3>
      <p>Nested lists basically always look bad which is why editors like Medium don't even let you do it, but I guess since some of you goofballs are going to do it we have to carry the burden of at least making it work.</p>
      <ol>
      <li><strong>Nested lists are rarely a good idea.</strong>
      <ul>
      <li>You might feel like you are being really "organized" or something but you are just creating a gross shape on the screen that is hard to read.</li>
      <li>Nested navigation in UIs is a bad idea too, keep things as flat as possible.</li>
      <li>Nesting tons of folders in your source code is also not helpful.</li>
      </ul>
      </li>
      <li><strong>Since we need to have more items, here's another one.</strong>
      <ul>
      <li>I'm not sure if we'll bother styling more than two levels deep.</li>
      <li>Two is already too much, three is guaranteed to be a bad idea.</li>
      <li>If you nest four levels deep you belong in prison.</li>
      </ul>
      </li>
      <li><strong>Two items isn't really a list, three is good though.</strong>
      <ul>
      <li>Again please don't nest lists if you want people to actually read your content.</li>
      <li>Nobody wants to look at this.</li>
      <li>I'm upset that we even have to bother styling this.</li>
      </ul>
      </li>
      </ol>
      <p>The most annoying thing about lists in Markdown is that <code>&lt;li&gt;</code> elements aren't given a child <code>&lt;p&gt;</code> tag unless there are multiple paragraphs in the list item. That means I have to worry about styling that annoying situation too.</p>
      <ul>
      <li>
      <p><strong>For example, here's another nested list.</strong></p>
      <p>But this time with a second paragraph.</p>
      <ul>
      <li>These list items won't have <code>&lt;p&gt;</code> tags</li>
      <li>Because they are only one line each</li>
      </ul>
      </li>
      <li>
      <p><strong>But in this second top-level list item, they will.</strong></p>
      <p>This is especially annoying because of the spacing on this paragraph.</p>
      <ul>
      <li>
      <p>As you can see here, because I've added a second line, this list item now has a <code>&lt;p&gt;</code> tag.</p>
      <p>This is the second line I'm talking about by the way.</p>
      </li>
      <li>
      <p>Finally here's another list item so it's more like a list.</p>
      </li>
      </ul>
      </li>
      <li>
      <p>A closing list item, but with no nested list, because why not?</p>
      </li>
      </ul>
      <p>And finally a sentence to close off this section.</p>
      <h2 id="there-are-other-elements-we-need-to-style">There are other elements we need to style<a aria-hidden="true" tabindex="-1" href="#there-are-other-elements-we-need-to-style"><span class="icon icon-link"></span></a></h2>
      <p>I almost forgot to mention links, like <a href="https://tailwindcss.com">this link to the Tailwind CSS website</a>. We almost made them blue but that's so yesterday, so we went with dark gray, feels edgier.</p>
      <p>We even included table styles, check it out:</p>
      <table><thead><tr><th>Wrestler</th><th>Origin</th><th>Finisher</th></tr></thead><tbody><tr><td>Bret "The Hitman" Hart</td><td>Calgary, AB</td><td>Sharpshooter</td></tr><tr><td>Stone Cold Steve Austin</td><td>Austin, TX</td><td>Stone Cold Stunner</td></tr><tr><td>Randy Savage</td><td>Sarasota, FL</td><td>Elbow Drop</td></tr><tr><td>Vader</td><td>Boulder, CO</td><td>Vader Bomb</td></tr><tr><td>Razor Ramon</td><td>Chuluota, FL</td><td>Razor's Edge</td></tr></tbody></table>
      <p>We also need to make sure inline code looks good, like if I wanted to talk about <code>&lt;span&gt;</code> elements or tell you the good news about <code>@tailwindcss/typography</code>.</p>
      <h3 id="sometimes-i-even-use-code-in-headings">Sometimes I even use <code>code</code> in headings<a aria-hidden="true" tabindex="-1" href="#sometimes-i-even-use-code-in-headings"><span class="icon icon-link"></span></a></h3>
      <p>Even though it's probably a bad idea, and historically I've had a hard time making it look good. This <em>"wrap the code blocks in backticks"</em> trick works pretty well though really.</p>
      <p>Another thing I've done in the past is put a <code>code</code> tag inside of a link, like if I wanted to tell you about the <a href="https://github.com/tailwindcss/docs"><code>tailwindcss/docs</code></a> repository. I don't love that there is an underline below the backticks but it is absolutely not worth the madness it would require to avoid it.</p>
      <h4 id="we-havent-used-an-h4-yet">We haven't used an <code>h4</code> yet<a aria-hidden="true" tabindex="-1" href="#we-havent-used-an-h4-yet"><span class="icon icon-link"></span></a></h4>
      <p>But now we have. Please don't use <code>h5</code> or <code>h6</code> in your content, Medium only supports two heading levels for a reason, you animals. I honestly considered using a <code>before</code> pseudo-element to scream at you if you use an <code>h5</code> or <code>h6</code>.</p>
      <p>We don't style them at all out of the box because <code>h4</code> elements are already so small that they are the same size as the body copy. What are we supposed to do with an <code>h5</code>, make it <em>smaller</em> than the body copy? No thanks.</p>
      <h3 id="we-still-need-to-think-about-stacked-headings-though">We still need to think about stacked headings though.<a aria-hidden="true" tabindex="-1" href="#we-still-need-to-think-about-stacked-headings-though"><span class="icon icon-link"></span></a></h3>
      <h4 id="lets-make-sure-we-dont-screw-that-up-with-h4-elements-either">Let's make sure we don't screw that up with <code>h4</code> elements, either.<a aria-hidden="true" tabindex="-1" href="#lets-make-sure-we-dont-screw-that-up-with-h4-elements-either"><span class="icon icon-link"></span></a></h4>
      <p>Phew, with any luck we have styled the headings above this text and they look pretty good.</p>
      <p>Let's add a closing paragraph here so things end with a decently sized block of text. I can't explain why I want things to end that way but I have to assume it's because I think things will look weird or unbalanced if there is a heading too close to the end of the document.</p>
      <p>What I've written here is probably long enough, but adding this final sentence can't hurt.</p>
      <h2 id="github-flavored-markdown">GitHub Flavored Markdown<a aria-hidden="true" tabindex="-1" href="#github-flavored-markdown"><span class="icon icon-link"></span></a></h2>
      <p>I've also added support for GitHub Flavored Mardown using <code>remark-gfm</code>.</p>
      <p>With <code>remark-gfm</code>, we get a few extra features in our markdown. Example: autolink literals.</p>
      <p>A link like <a href="http://www.example.com">www.example.com</a> or <a href="https://example.com">https://example.com</a> would automatically be converted into an <code>a</code> tag.</p>
      <p>This works for email links too: <a href="mailto:contact@example.com">contact@example.com</a>.</p>`,
      image: 'charlesdeluvio-cZr2sgaxy3Q-unsplash.webp',
      created_at: 'January 4, 2023',
      view: 3807,
      time: 10
    },
    blog_topics : [
      {
        id: 1,
        title: 'What to expect from here on out',
        sub_title: [
          {
            sub_id: 1,
            title : 'Typography should be easy',
          }
        ]
      },
      {
        id: 2,
        title: 'What if we stack headings?',
       sub_title: [
          {
            sub_id: 1,
            title : 'We should make sure that looks good, too.'
          },
          {
            sub_id: 2,
            title : 'When a heading comes after a paragraph …'
          }
        ]
      },
      {
        id: 3,
        title: 'Code should look okay by default.',
       sub_title: [
          {
            sub_id: 1,
            title : 'What about nested lists?'
          }
        ]
      },
      {
        id: 4,
        title: 'There are other elements we need to style',
       sub_title: [
          {
            sub_id: 1,
            title : 'Sometimes I even use `code` in headings'
          },
          {
            sub_id: 2,
            title : "We haven't used an `h4` yet"
          },
          {
            sub_id: 3,
            title : 'We still need to think about stacked headings though.'
          },
          {
            sub_id: 4,
            title : "Let's make sure we don't screw that up with `h4` elements, either."
          }
        ]
      },
      {
        id: 4,
        title: 'GitHub Flavored Markdown',
       sub_title: [
        ]
      }
    ]
  }
]