const projects = [
  {
    key: 1,
    image: '../static/thumbs800x400/supercard-dev2.jpg',
    title: 'Supercard',

    desc:
      'TypeScript / React web development, and UX design for Supercard, digital birthday greetings app. Click to view the project.',

    role2: 'UX Design: Mobile wireframes and design with Figma',
    role1: 'Front-end: TypeScript / React / Styled-components development',

    role3: 'Backend: Vercel serverless functions connected to MongoDB',

    // role4:"Motion graphic creation for IBM Partners lockup compiled to JavaScript and SVG to run in the browser",

    // techstack: ""
    // TAGS:
    tag1: 'HTML5',
    tag2: 'SCSS',
    tag3: 'JavaScript',
    tag4: 'TypeScript',
    tag5: 'React',

    year: 2020,
    // HREF LINK
    link: 'https://supercardco.com',
  },
  {
    key: 1,
    image: '../static/thumbs800x400/IBM_800x400.jpg',
    title: 'IBM',

    desc:
      "JavaScript web development, and UX design for IBM Partners, IBM's business services portal. Click to view the project.",

    role1: 'UX Design: Mobile and desktop wireframes and design with Sketch',
    role2: 'Front-end: JavaScript development',

    role3:
      'Transitioned UX from IBM’s Northstar design system to its new Duo design system. New typestyles, color palettes, column grid',

    // role4:"Motion graphic creation for IBM Partners lockup compiled to JavaScript and SVG to run in the browser",

    // techstack: ""
    // TAGS:
    tag1: 'HTML5',
    tag2: 'CSS3',
    tag3: 'JavaScript',
    tag4: 'Sketch',

    year: 2018,
    // HREF LINK
    // link: "./ibm.html"
    link: 'https://www.ibm.com/partners/start/',
  },

  {
    key: 31,
    image: '../static/thumbs800x400/appnexus-thumb.jpg',
    title: 'AppNexus',
    desc:
      "ReactJS web development, Storybook component creation, and unit testing for AppNexus' global advertising platform.",

    role1:
      'Evolved/refactored ANX_React, their proprietary react component design system',
    role2: 'Unit testing with Jest / Mocha / Chai',
    role3: 'Fixed UI and application logic bugs',
    role4: 'Data fetching from REST and GraphQL APIs',
    // TAGS:
    //  tag1: 'sketch',
    tag1: 'JavaScript',
    tag2: 'React',
    tag3: 'UX/UI',
    tag4: 'SCSS',
    tag5: 'Storybook',

    year: 2019,
    link: 'https://www.appnexus.com/fr',
    dim: false,
  },

  {
    key: 30,
    image: '../static/thumbs800x400/eejs_800x400-2.jpg',
    title: 'EricElliottJS.com',
    desc:
      "React web development, component creation and UX design for Eric Elliott's JavaScript education platform.",

    role1: 'Front-end: React and NextJS development',
    role2: 'UX Design: Mobile and desktop wireframes and design with Sketch',
    role3: 'Implemented user payments with Paypal SDK',
    role4:
      'Implemented user auth with Firebase Auth and persistent data with Cloud Firestore',
    role5: 'SVG/JS animation with Adobe After Effects and LottieJS',
    // TAGS:
    //  tag1: 'sketch',
    tag1: 'JavaScript',
    tag2: 'React',
    tag3: 'NextJS',
    tag4: 'CSS/SASS',

    year: 2019,
    //  tag6: 'sass/scss',
    //  tag7: 'svg',
    // HREF LINK
    // link: "https://www.behance.net/gallery/63693141/Tradewind-Markets-Blockchain-Technology-Website"
    link: 'https://ericelliottjs.com',
    dim: false,
  },

  // {
  //   key: 5,
  //   image: '../static/thumbs800x400/youtubezero3-rect.gif',
  //   title: 'YouTube Zero',
  //   desc:
  //     'ReactJS application providing a zero-click YouTube search interface. Click to view.',
  //
  //   role1: 'Fetch data from YouTube DataAPI v3. ',
  //   role2: 'CSS-in-JS with Styled-components and Tachyons.',
  //   // TAGS:
  //   tag1: 'React',
  //   tag2: 'CSS3',
  //   tag3: 'JavaScript',
  //   tag4: 'YouTube API',
  //
  //   year: 2017,
  //   // HREF LINK
  //   // link: "https://youtubezero.herokuapp.com/"
  //   link: 'https://youtubezero.now.sh/',
  // },

  {
    key: 6,
    image: '../static/thumbs800x400/patagonia-ww3.gif',
    title: 'Patagonia',
    desc:
      "Animated sequence for Patagonia Provisions, Patagonia's line of foods and recipes. Click to view.",

    role:
      'Created the Provisions design artwork in Pshop/Illustrator, based on brand assets. Animated the assets in After Effects. Rendered to JSON and implemented into a codebase.',
    // TAGS:
    //  tag1: 'sketch',
    //  tag2: 'CSS3',
    tag1: 'After Effects',
    tag2: 'JavaScript',
    tag3: 'Lottie',
    //  tag4: 'Illustrator',
    tag5: 'SVG',

    year: 2017,
    // HREF LINK
    link: 'https://codepen.io/aaronadler/pen/vWoVoN',
  },

  {
    key: 30,
    image: '../static/thumbs800x400/artemis_800x400-2.jpg',
    title: 'Artemis Capital Advisors',
    desc:
      'React web development, component creation and UX design for Artemis Capital Advisors.',

    role1: 'Front-end: JavaScript / React / NextJS app development',
    role2: 'UX Design: Mobile and desktop wireframes and design with Figma',
    role3: 'CSS styles: CSS-in-JS / styledJSX / external SASS',
    role4: 'Animated brand identity with CSS animation',
    role5:
      'React interactive data table component with sort and filter functionality',
    role6: 'Google Maps API with custom color palette and custom map pin',
    // TAGS:
    //  tag1: 'sketch',
    tag1: 'JavaScript',
    tag2: 'React',
    tag3: 'NextJS',
    tag4: 'CSS/SASS',
    tag5: 'Figma',

    year: 2019,
    //  tag6: 'sass/scss',
    //  tag7: 'svg',
    // HREF LINK
    // link: "https://www.behance.net/gallery/63693141/Tradewind-Markets-Blockchain-Technology-Website"
    link: 'https://artemis.llc',
    dim: false,
  },

  // KITH
  // {
  //   key: 2,
  //   image: '../static/kith-rect3.jpg',
  //   title: 'Kith Footwear',
  //   desc:
  //     'Ecommerce store prototype. Built with React, styled-components, CSS Grid, Tachyons. Click to view the project.',

  //   role1:
  //     'Each piece of UI is a React component. Product cards rendered from a mapped array, and inserted into a responsive CSS Grid.',
  //   role2:
  //     'Custom media queries with ES6 template strings, which retrieve screen widths from a JavaScript object.',

  //   // TAGS:
  //   tag1: 'HTML5',
  //   tag2: 'CSS Grid',
  //   tag3: 'JavaScript',
  //   tag4: 'React',
  //   //  tag4: 'Styled-components',

  //   year: 2018,
  //   // HREF LINK
  //   // link: "http://kith-store.aaronadler.com"
  //   link: 'https://kith.now.sh/',
  // },

  {
    key: 30,
    title: 'IBM Partners - Motion Identity',
    desc:
      "JavaScript brand animation for IBM Partners, IBM's business services portal. Click to interact with the animation in a playground environment.",

    role1:
      'Designed identity in Illustrator. Animated motion in After Effects. Exported to JSON and SVG with Bodymovin to run in the browser.',

    role2:
      'Scales to any size, runs in the browser at 60fps, compiles to a tiny 43k JSON file.',
    // TAGS:
    tag1: 'Sketch',
    tag2: 'Adobe CC',
    tag3: 'CSS3',
    tag4: 'JavaScript',

    year: 2018,
    // HREF LINK
    // link: "./ibm.html"
    // link: "https://ww2.aaronadler.com/anim-demos/5_ibm-circle-diamond/"
    link: 'https://ibmpartners.now.sh/',
  },

  {
    key: 333,
    image: '../static/discovery_thumb_black2.jpg',
    title: 'Discovery Channel - Multistep React Form',
    desc:
      'React component for a multistep subscriber form. Click to view (resize window to view 3 breakpoint layouts).',

    role1:
      'Built the UI component using React, Sass, CSS grid, Tachyons and Formik.',
    role2:
      'Three media queries provide styling for the component across browser widths.',
    role3: 'Implemented form validation and required field errors.',
    role4:
      'User form data saved to component state and logged to the console (view console in browser)',

    // TAGS:
    //  tag1: 'sketch',
    tag1: 'React',
    tag2: 'CSS Grid',
    tag3: 'JavaScript',
    tag4: 'Formik',

    year: 2019,
    link: 'https://discovery-ui.now.sh/',
  },

  // {
  //   key: 3,
  //   image: '../static/Tradewind-800x400.gif',
  //   title: 'Tradewind Markets - Blockchain platform',
  //    desc: "Designed, built and coded Tradewind's web presence, as well as a coded animated logo treatment.",
  //    role: "Built the multipage site using HTML5, CSS3, Flexbox, Sass, Javascript and Gulp. Animated the logo with Greensock/GSAP TweenMax. Handed off to internal engineers for deployment.",
  //   // TAGS:
  //   //  tag1: 'sketch',
  //    tag1: 'HTML5',
  //    tag2: 'CSS3',
  //    tag3: 'JavaScript',
  //    tag4: 'Gulp',
  //
  //    year: 2018,
  //   //  tag6: 'sass/scss',
  //   //  tag7: 'svg',
  //        // HREF LINK
  //   // link: "https://www.behance.net/gallery/63693141/Tradewind-Markets-Blockchain-Technology-Website"
  //   link: "https://tradewindmarkets.com"
  // },

  // {
  //   key: '2B',
  //   image: '../static/thumbs800x400/motet3b.jpg',
  //   title: 'Motet - Music App UX',
  //   desc:
  //     'Mobile music app with a minimal graphic interface. Light scheme to contrast against Spotify. Click to view the project.',
  //
  //   role:
  //     'Developed the brand identity with Photoshop and Illustrator. Created the UI design of all screens at 1x with Sketch.',
  //   // TAGS:
  //   tag1: 'Sketch',
  //   tag2: 'Illustrator',
  //   tag3: 'Photoshop',
  //   tag4: 'SVG',
  //
  //   year: 2017,
  //   // HREF LINK
  //   link:
  //     'https://www.behance.net/gallery/60987045/Motet-Music-Application-Identity-and-UI-Design',
  // },

  // {
  //   key: '26',
  //   image: '../static/wellsfargo/wfLock2.jpg',
  //   title: 'Wells Fargo UX',

  //    desc: 'Redesign of the the Wells Fargo consumer banking design system. Coming 2019; viewable by appointment.',

  //    role1: "Constructed the master design system “source of truth” Sketch file, consisting of typography, color palette, grid and column layouts.",
  //    role2: "Built a family of button styles and their default, hover, active, and disabled states.",
  //    role3: "Redesigned several interface components, including masthead, header nav menu, mobile nav menu, footer and others",
  //   // TAGS:
  //    tag1: 'Sketch',
  //    tag2: 'Illustrator',
  //    tag3: 'Photoshop',
  //    tag4: 'SVG',

  //    year: 2018,
  //        // HREF LINK
  //   link: "javascript:alert('👋👋👋 The Wells Fargo UX project is viewable by appointment until it is released in 2019  🙏🙏🙏')"
  // },

  // vvv BLOCKPARTY
  // vvv BLOCKPARTY
  // vvv BLOCKPARTY
  {
    key: '2BB',
    image: '../static/Blockparty-800x400-3.jpg',
    title: 'Blockparty - Blockchain app UX',
    desc:
      'Blockchain-based event-ticketing platform. The polygonal hippo graphic is original artwork created with D-Mesh. Click to view.',

    role:
      'Designed the onboarding flow UI screens; built React components which were ported to React Native; developed the character design for their polygonal hippo mascot. The polygonal hippo is original artwork created with DMesh.',
    // TAGS:
    tag1: 'Sketch',
    tag2: 'Illustrator',
    tag3: 'DMesh',
    tag4: 'React',

    year: 2018,
    // HREF LINK
    link:
      'https://www.behance.net/gallery/66044535/Blockparty-Blockchain-UXUI-Mobile-App-Site-Design',
  },
  //
  // {
  //   key: '2C',
  //   image:
  //     'https://dl.dropboxusercontent.com/s/4siji9ixbeggje9/blockchain-RECT-2.gif',
  //   title: 'Blockchain.com - Wallet UI',
  //   desc:
  //     'Currency Slider Component for iOS Wallet App, which allows the user to select and transact with multiple currencies. Click to view.',
  //
  //   role:
  //     'Developed the Currency Slider Component with Sketch and AdobeCC. Designed the UI component of all screens at 1x with Sketch.',
  //   // TAGS:
  //   tag1: 'Sketch',
  //   tag2: 'Illustrator',
  //   tag3: 'Photoshop',
  //   tag4: 'SVG',
  //
  //   year: 2018,
  //   // HREF LINK
  //   link:
  //     'https://www.behance.net/gallery/65967583/Blockchaincom-UI-Currency-Slider',
  //   dim: true,
  // },

  // {
  //   key: 4,
  //   image: '../static/thumbs800x400/verbal4.jpg',
  //   title: 'Verbal - Messaging UI',
  //   desc:
  //     'Minimal messaging app without marketplaces, ads, or other add-ons to encourage usage. Click to view.',
  //
  //   role:
  //     'Developed the brand identity with Photoshop and Illustrator. Created the UI design of all screens at 1x with Sketch.',
  //   // TAGS:
  //   tag1: 'Sketch',
  //   tag2: 'Illustrator',
  //   tag3: 'Photoshop',
  //   tag4: 'SVG',
  //
  //   year: 2016,
  //   // HREF LINK
  //   link:
  //     'https://www.behance.net/gallery/61048837/Verbal-Messaging-App-Brand-Identity-and-UI-Design',
  // },

  // {
  //   key: 7,
  //   image: '../static/thumbs800x400/google-play-17-rect.jpg',
  //   title: 'Google Play',
  //    desc: 'Campaign concept and design to promote movies, music and book titles on Google Play. Click to view.',
  //
  //    role: "I worked with a writer to develop the creative concept. Designed the layouts with Sketch and Adobe Creative Suite.",
  //   // TAGS:
  //    tag1: 'Sketch',
  //    tag2: 'Illustrator',
  //    tag3: 'Photoshop',
  //    tag4: 'SVG',
  //
  //    year: 2014,
  //   //  tag5: 'bodymovin',
  //   //  tag6: 'Illustrator',
  //   //  tag7: '',
  //   // HREF LINK
  //   link: "https://dribbble.com/shots/3939152-Google-Play-All-Together-Beauty"
  // },

  {
    key: 8,
    gif: true,
    image: '../static/thumbs800x400/daftpunk-320.gif',
    title: 'Daft Punk - Facebook Camera Effect AR',
    desc:
      'The Daft Punk Helmet as a wearable Camera Effect. Click to view the video and experience the Camera Effect on mobile.',

    role:
      'Received the helmet as a .obj 3D model. Added textures, materials and lighting in Blender and ARStudio. Created the background animations in After Effects. Configured the object to a face-tracker in ARStudio.',
    // TAGS:
    tag1: 'AR',
    tag2: 'Blender3D',
    tag3: 'Photoshop',
    tag4: 'AfterEff',

    year: 2017,
    // HREF LINK
    link: 'https://www.facebook.com/160758384681784/videos/166745714083051',
  },
  // {
  //   key: 9,
  //   image: '../static/thumbs800x400/cotton-bur-rect.gif',
  //   title: 'Cotton Bureau',
  //   desc:
  //     'Animated logo lockup for Cotton Bureau. Created in After Effects and converted to JSON via Lottie. Click to view on Codepen.',
  //
  //   role: 'tba',
  //   // TAGS:
  //   tag1: 'Illustrator',
  //   tag2: 'After Effects',
  //   tag3: 'JavaScript',
  //   tag4: 'lottie',
  //
  //   year: 2017,
  //   // HREF LINK
  //   link: 'https://codepen.io/aaronadler/pen/OzLYYM',
  // },
  // {
  //   key: 10,
  //   image: 'https://s3.amazonaws.com/ww4-aa-com/img/ww3-aa/arss.gif',
  //   title: 'ARsocialstudio',
  //    desc: 'ARss is a microservice to build and deploy 3D Facebook Camera Effects for clients. 3D modeling, scripting and publication to the Camera Effects Platform. Click to view site.',

  //    role: "tba",
  //   // TAGS:
  //    tag1: 'HTML5',
  //    tag2: 'css3',
  //    tag3: 'JavaScript',
  //    tag4: 'gulp',

  //    year: 2017,
  //    // HREF LINK
  //    link: "https://thearss.com/"
  // },

  //
  // {
  //   key: 11,
  //   gif: true,
  //   image: '../static/thumbs800x400/moic3.gif',
  //   title: 'Museum of Ice Cream - Facebook Camera Effect',
  //    desc: 'Interactive AR 3D-based Facebook Camera Effect for the Museum of Ice Cream. Click to view the video and Camera Effect on your mobile device.',
  //
  //    role: "Received the ice cream scoops, cone and peppermint assets as .obj 3D models. Added colors, textures, and materials in ARStudio. Created the typography and background animations in After Effects. Configured the objects to a face-tracker in ARStudio.",
  //   // TAGS:
  //    tag1: 'ARStudio',
  //    tag2: 'Blender3D',
  //    tag3: 'Photoshop',
  //    tag4: 'After Eff',
  //
  //    year: 2017,
  //     // HREF LINK
  //     link: "https://www.facebook.com/160758384681784/videos/162009941223295/"
  // },

  // {
  //   key: 12,
  //   image: '../static/thumbs800x400/arthritis-rect.jpg',
  //   title: 'Arthritis Foundation',
  //    desc: 'Graphic to promote awareness for the Arthritis Foundation. Click to view.',

  //    role: "Concept creation and graphic design",
  //   // TAGS:
  //    tag1: 'Sketch',
  //    tag2: 'Illustrator',
  //    tag3: 'SVG',
  //    tag4: 'Photoshop',

  //    year: 2011,
  //     // HREF LINK
  //   link: "https://dribbble.com/shots/3998425-Arthritis-Foundation-graphic"
  // },

  // {
  //   key: 13,
  //   image: 'https://s3.amazonaws.com/ww4-aa-com/img/ww3-aa/facebook-rect.jpg',
  //   title: 'Facebook "Stay Close"',
  //    desc: 'Creative concept and design to promote Facebook Stories. Click to view.',

  //    role: "tba",
  //   // TAGS:
  //    tag1: 'Sketch',
  //    tag2: 'Illustrator',
  //    tag3: 'Photoshop',
  //    tag4: 'SVG',

  //    year: 2016,
  //    // HREF LINK
  //    link: "https://dribbble.com/shots/3440241-Facebook-Stories-Silicon-Valley"
  // },
  // {
  //   key: 14,
  //   image: 'https://s3.amazonaws.com/ww4-aa-com/img/ww3-aa/sweeps-rect.jpg',
  //   title: 'Fedex "Sweeps"',
  //    desc: 'Creative concept to promote FedEx small business services. Agency: BBDO New York. Click to view.',

  //    role: "tba",

  //   // TAGS:
  //    tag1: 'concept',
  //    tag2: 'film/tv',
  //    tag3: 'art direction',
  //    tag4: 'creative',

  //    year: 2007,
  //     // HREF LINK
  //     link: "https://vimeo.com/8253231"
  // },
  // {
  //   key: 15,
  //   image: 'https://s3.amazonaws.com/ww4-aa-com/img/ww3-aa/wind-rect.jpg',
  //   title: 'Fox Sports "Wind"',
  //    desc: 'Creative concept to promote the NBA on Fox Sports. Agency: Cliff Freeman & Partners. Click to view.',

  //    role: "tba",
  //   // TAGS:
  //   tag1: 'concept',
  //   tag2: 'film/tv',
  //   tag3: 'art direction',
  //   tag4: 'creative',

  //   year: 2004,
  //        // HREF LINK
  //        link: "https://vimeo.com/8285842"
  // },
  // {
  //   key: 16,
  //   image: 'https://s3.amazonaws.com/ww4-aa-com/img/ww3-aa/arcteryx2.jpg',
  //   title: "Arc'Teryx",
  //    desc: "Animated lockup for outdoor equipment brand Arc'Teryx. Click to view.",

  //    role: "tba",
  //   // TAGS:
  //    tag1: 'Illustrator',
  //    tag2: 'After Eff',
  //    tag3: 'lottie',
  //    tag4: 'SVG',

  //    year: 2016,
  //   // HREF LINK
  //   link: "https://dribbble.com/shots/3988978-Arc-Teryx-Animated-Lockup"

  // },
  // {
  //   key: 17,
  //   image: 'https://s3.amazonaws.com/ww4-aa-com/img/ww3-aa/curb-your.gif',
  //   title: 'HBO "Curb Your Enthusiasm"',
  //    desc: "Graphic lockup and character illustration to promote HBO's Curb Your Enthusiasm Season 9. Click to view.",

  //    role: "tba",
  //   // TAGS:
  //   tag1: 'Sketch',
  //   tag2: 'Photoshop',
  //   tag3: 'Illustrator',
  //   tag4: 'concept',

  //   year: 2017,
  //        // HREF LINK
  //        link: "https://dribbble.com/shots/3991223-HBO-Curb-Your-Enthusiasm-Season-9-Pret-ty-Good"
  // }
  // ,
  // {
  //   key: 18,
  //   image: 'https://s3.amazonaws.com/ww4-aa-com/img/ww3-aa/ski-nyc.gif',
  //   title: 'Ski NYC',
  //    desc: "Tribute to New York City winter. Click to view.",

  //    role: "tba",
  //   // TAGS:
  //   tag1: 'Sketch',
  //   tag2: 'Photoshop',
  //   tag3: 'Illustrator',
  //   tag4: 'concept',

  //   year: 2015,
  //   // HREF LINK
  //   link: "https://dribbble.com/shots/3991227--SKI-NYC"
  // }
  // ,
  // {
  //   key: 19,
  //   image: 'https://s3.amazonaws.com/ww4-aa-com/img/ww3-aa/thumbs2-rect.jpg',
  //   title: 'DirecTV "Thumbs"',
  //    desc: 'Creative concept to promote the breadth of DirecTV channels and services. Agency: BBDO New York',
  //   // TAGS:
  //   tag1: 'Sketch',
  //   tag2: 'Photoshop',
  //   tag3: 'Illustrator',
  //   tag4: 'concept',
  //   // HREF LINK
  //   link: ""
  // },
  // {
  //   key: 20,
  //   image: 'https://s3.amazonaws.com/ww4-aa-com/img/ww3-aa/noah-rect.jpg',
  //   title: 'The Weather Channel "Noah"',
  //    desc: "Film to launch The Weather Channel's personalized weather feature on their mobile app. Agency: BBH New York",

  //    role: "tba",
  //   // TAGS:
  //   tag1: 'concept',
  //   tag2: 'film/tv',
  //   tag3: 'art direction',
  //   tag4: 'creative',

  //   year: 2011,
  //   // HREF LINK
  //   link: "https://vimeo.com/95035102"
  // },

  // {
  //   key:22,
  //   image: 'https://s3.amazonaws.com/ww4-aa-com/img/ww3-aa/guinness-rect.jpg',
  //   title: 'Guinness "Good Things Come"',
  //    desc: 'Creative concept to promote Guinness. Agency: AMV BBDO London',
  //   // TAGS:
  //   tag1: 'Sketch',
  //   tag2: 'Photoshop',
  //   tag3: 'Illustrator',
  //   tag4: 'concept',
  //        // HREF LINK
  //        link: ""
  // },

  // {
  //   key: 23,
  //   image: 'https://s3.amazonaws.com/ww4-aa-com/img/ww3-aa/lgc-rect.jpg',
  //   title: 'London Graphic Centre',
  //    desc: 'Creative concept to promote London Graphic Centre paints. Agency: AMV BBDO London',
  //   // TAGS:
  //   tag1: 'Sketch',
  //   tag2: 'Photoshop',
  //   tag3: 'Illustrator',
  //   tag4: 'concept',
  //   // HREF LINK
  //   link: ""
  // },

  // {
  //   key: 24,
  //   image: 'https://s3.amazonaws.com/ww4-aa-com/img/ww3-aa/snickers-rect.jpg',
  //   title: 'Snickers "What Are You Hungry For"',
  //    desc: 'Creative concept to promote Snickers partnership with the NFL. Agency: BBDO New York',
  //   // TAGS:
  //    tag1: 'Sketch',
  //    tag2: 'Photoshop',
  //    tag3: 'Illustrator',
  //    tag4: 'concept',
  //     // HREF LINK
  //     link: ""
  // },

  // {
  //   key: 25,
  //   image: 'https://s3.amazonaws.com/ww4-aa-com/img/ww3-aa/hermes-rev.gif',
  //   title: 'Hermés - HTML5 Remix',
  //    desc: 'A Codepen tribute to HTML5 via the Hermés logo. Created with Adobe After Effects and converted to JSON via Lottie/Bodymovin.',

  //    role: "tba",
  //   // TAGS:
  //    tag1: 'Illustrator',
  //    tag2: 'After Eff',
  //    tag3: 'lottie',
  //    tag4: 'SVG',

  //    year: 2017,
  //    // HREF LINK
  //    link: ""
  // }
];

export default projects;
