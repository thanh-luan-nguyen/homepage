const myProjects = [
  {
    name: 'Google homepage',
    gif: 'https://res.cloudinary.com/di4daizto/image/upload/v1653389562/personal_homepage/projects/theOdinProjects/Google_Homepage_ihmqye.gif',
    demo: 'https://thanh-luan-nguyen.github.io/google-homepage',
    code: 'https://github.com/thanh-luan-nguyen/google-homepage',
  },
  {
    name: 'Youtube videopage',
    gif: 'https://res.cloudinary.com/di4daizto/image/upload/v1653403371/personal_homepage/projects/theOdinProjects/Youtube_Homepage_xhrb67.gif',
    demo: 'https://g5gud.csb.app/',
    code: 'https://codesandbox.io/s/youtube-video-page-g5gud',
  },
  {
    name: 'rock paper scissors',
    gif: 'https://res.cloudinary.com/di4daizto/image/upload/v1653402829/personal_homepage/projects/theOdinProjects/Rock_Paper_Scissors_ezujst.gif',
    demo: 'https://thanh-luan-nguyen.github.io/rock-paper-scissors',
    code: 'https://github.com/thanh-luan-nguyen/rock-paper-scissors',
  },
  {
    name: 'calculator app',
    gif: 'https://res.cloudinary.com/di4daizto/image/upload/v1653389562/personal_homepage/projects/theOdinProjects/Calculator_q0fhrw.gif',
    demo: 'https://github.com/thanh-luan-nguyen/thanh-luan-nguyen/blob/main/project_preview_gifs/theOdinProject/TicTacToe.gif',
    code: 'https://github.com/thanh-luan-nguyen/calculator-app',
  },
  {
    name: 'etch-a-sketch',
    gif: 'https://res.cloudinary.com/di4daizto/image/upload/v1653402825/personal_homepage/projects/theOdinProjects/etch-a-sketch_wwlabb.gif',
    demo: 'https://thanh-luan-nguyen.github.io/etch-a-sketch/',
    code: 'https://github.com/thanh-luan-nguyen/etch-a-sketch',
  },
  {
    name: 'tic-tac-toe',
    gif: 'https://res.cloudinary.com/di4daizto/image/upload/v1653389562/personal_homepage/projects/theOdinProjects/TicTacToe_ka5sf2.gif',
    demo: 'https://thanh-luan-nguyen.github.io/tic-tac-toe',
    code: 'https://github.com/thanh-luan-nguyen/tic-tac-toe',
  },
  {
    name: 'memory card game',
    gif: 'https://res.cloudinary.com/di4daizto/image/upload/v1653403709/personal_homepage/projects/theOdinProjects/Memory_Card_p5wpuy.gif',
    demo: 'https://thanh-luan-nguyen.github.io/memory-card-game',
    code: 'https://github.com/thanh-luan-nguyen/memory-card-game',
  },
  {
    name: 'restaurant page',
    gif: 'https://res.cloudinary.com/di4daizto/image/upload/v1653404046/personal_homepage/projects/theOdinProjects/Mellandi_Caravan_a0bboi.gif',
    demo: 'https://thanh-luan-nguyen.github.io/restaurant-page',
    code: 'https://github.com/thanh-luan-nguyen/restaurant-page',
  },
  {
    name: 'book keeping app',
    gif: 'https://res.cloudinary.com/di4daizto/image/upload/v1653402827/personal_homepage/projects/theOdinProjects/Library_yhwx3g.gif',
    demo: 'https://thanh-luan-nguyen.github.io/book-keeping-app',
    code: 'https://github.com/thanh-luan-nguyen/book-keeping-app',
  },
  {
    name: 'cv-builder',
    gif: 'https://res.cloudinary.com/di4daizto/image/upload/v1653402826/personal_homepage/projects/theOdinProjects/CV_Builder_zj4jhz.gif',
    demo: 'https://thanh-luan-nguyen.github.io/cv-builder',
    code: 'https://github.com/thanh-luan-nguyen/cv-builder',
  },
  {
    name: 'weather app',
    gif: 'https://res.cloudinary.com/di4daizto/image/upload/v1653403651/personal_homepage/projects/theOdinProjects/Weather_App_klkm3o.gif',
    demo: 'https://thanh-luan-nguyen.github.io/weather-app',
    code: 'https://github.com/thanh-luan-nguyen/weather-app',
  },
  {
    name: 'todolist app',
    gif: 'https://res.cloudinary.com/di4daizto/image/upload/v1653402828/personal_homepage/projects/theOdinProjects/Todo_List_sux3jd.gif',
    demo: 'https://thanh-luan-nguyen.github.io/to-do-list',
    code: 'https://github.com/thanh-luan-nguyen/to-do-list',
  },
  {
    name: 'shopping website',
    gif: 'https://res.cloudinary.com/di4daizto/image/upload/v1653402827/personal_homepage/projects/theOdinProjects/Shopping_Cart_d4ypno.gif',
    demo: 'https://thanh-luan-nguyen.github.io/shopping-cart',
    code: 'https://github.com/thanh-luan-nguyen/shopping-cart',
  },
  {
    name: 'faekbook',
    gif: 'https://res.cloudinary.com/di4daizto/image/upload/v1653402828/personal_homepage/projects/theOdinProjects/faekbook_z5klwz.gif',
    demo: 'https://thanh-luan-nguyen.github.io/faekbook',
    code: 'https://github.com/thanh-luan-nguyen/faekbook',
  },
  // *************************************************
  // {
  //   name: 'Google homepage',
  //   gif: '/projects/google.gif',
  //   demo: 'https://thanh-luan-nguyen.github.io/google-homepage',
  //   code: 'https://github.com/thanh-luan-nguyen/google-homepage',
  // },
  // {
  //   name: 'Youtube videopage',
  //   gif: '/projects/youtube.gif',
  //   demo: 'https://g5gud.csb.app/',
  //   code: 'https://codesandbox.io/s/youtube-video-page-g5gud',
  // },
  // {
  //   name: 'rock paper scissors',
  //   gif: '/projects/rock-paper-scissors.gif',
  //   demo: 'https://thanh-luan-nguyen.github.io/rock-paper-scissors',
  //   code: 'https://github.com/thanh-luan-nguyen/rock-paper-scissors',
  // },
  // {
  //   name: 'calculator app',
  //   gif: '/projects/calculator.gif',
  //   demo: 'https://github.com/thanh-luan-nguyen/thanh-luan-nguyen/blob/main/project_preview_gifs/theOdinProject/TicTacToe.gif',
  //   code: 'https://github.com/thanh-luan-nguyen/calculator-app',
  // },
  // {
  //   name: 'etch-a-sketch',
  //   gif: '/projects/etch-a-sketch.gif',
  //   demo: 'https://thanh-luan-nguyen.github.io/etch-a-sketch/',
  //   code: 'https://github.com/thanh-luan-nguyen/etch-a-sketch',
  // },
  // {
  //   name: 'tic-tac-toe',
  //   gif: '/projects/tictactoe.gif',
  //   demo: 'https://thanh-luan-nguyen.github.io/tic-tac-toe',
  //   code: 'https://github.com/thanh-luan-nguyen/tic-tac-toe',
  // },
  // {
  //   name: 'memory card game',
  //   gif: '/projects/memory-card.gif',
  //   demo: 'https://thanh-luan-nguyen.github.io/memory-card-game',
  //   code: 'https://github.com/thanh-luan-nguyen/memory-card-game',
  // },
  // {
  //   name: 'restaurant page',
  //   gif: '/projects/restaurant.gif',
  //   demo: 'https://thanh-luan-nguyen.github.io/restaurant-page',
  //   code: 'https://github.com/thanh-luan-nguyen/restaurant-page',
  // },
  // {
  //   name: 'book keeping app',
  //   gif: '/projects/library.gif',
  //   demo: 'https://thanh-luan-nguyen.github.io/book-keeping-app',
  //   code: 'https://github.com/thanh-luan-nguyen/book-keeping-app',
  // },
  // {
  //   name: 'cv-builder',
  //   gif: '/projects/cv-builder.gif',
  //   demo: 'https://thanh-luan-nguyen.github.io/cv-builder',
  //   code: 'https://github.com/thanh-luan-nguyen/cv-builder',
  // },
  // {
  //   name: 'weather app',
  //   gif: '/projects/weather.gif',
  //   demo: 'https://thanh-luan-nguyen.github.io/weather-app',
  //   code: 'https://github.com/thanh-luan-nguyen/weather-app',
  // },
  // {
  //   name: 'todolist app',
  //   gif: '/projects/todolist.gif',
  //   demo: 'https://thanh-luan-nguyen.github.io/to-do-list',
  //   code: 'https://github.com/thanh-luan-nguyen/to-do-list',
  // },
  // {
  //   name: 'shopping website',
  //   gif: '/projects/shopping.gif',
  //   demo: 'https://thanh-luan-nguyen.github.io/shopping-cart',
  //   code: 'https://github.com/thanh-luan-nguyen/shopping-cart',
  // },
  // {
  //   name: 'faekbook',
  //   gif: '/projects/faekbook.gif',
  //   demo: 'https://thanh-luan-nguyen.github.io/faekbook',
  //   code: 'https://github.com/thanh-luan-nguyen/faekbook',
  // },
  // *************************************************
  // {
  //   name: 'Google homepage',
  //   gif: '../../public/projects/google.gif',
  //   demo: 'https://thanh-luan-nguyen.github.io/google-homepage',
  //   code: 'https://github.com/thanh-luan-nguyen/google-homepage',
  // },
  // {
  //   name: 'Youtube videopage',
  //   gif: '../../public/projects/youtube.gif',
  //   demo: 'https://g5gud.csb.app/',
  //   code: 'https://codesandbox.io/s/youtube-video-page-g5gud',
  // },
  // {
  //   name: 'rock paper scissors',
  //   gif: '../../public/projects/rock-paper-scissors.gif',
  //   demo: 'https://thanh-luan-nguyen.github.io/rock-paper-scissors',
  //   code: 'https://github.com/thanh-luan-nguyen/rock-paper-scissors',
  // },
  // {
  //   name: 'calculator app',
  //   gif: '../../public/projects/calculator.gif',
  //   demo: 'https://github.com/thanh-luan-nguyen/thanh-luan-nguyen/blob/main/project_preview_gifs/theOdinProject/TicTacToe.gif',
  //   code: 'https://github.com/thanh-luan-nguyen/calculator-app',
  // },
  // {
  //   name: 'etch-a-sketch',
  //   gif: '../../public/projects/etch-a-sketch.gif',
  //   demo: 'https://thanh-luan-nguyen.github.io/etch-a-sketch/',
  //   code: 'https://github.com/thanh-luan-nguyen/etch-a-sketch',
  // },
  // {
  //   name: 'tic-tac-toe',
  //   gif: '../../public/projects/tictactoe.gif',
  //   demo: 'https://thanh-luan-nguyen.github.io/tic-tac-toe',
  //   code: 'https://github.com/thanh-luan-nguyen/tic-tac-toe',
  // },
  // {
  //   name: 'memory card game',
  //   gif: '../../public/projects/memory-card.gif',
  //   demo: 'https://thanh-luan-nguyen.github.io/memory-card-game',
  //   code: 'https://github.com/thanh-luan-nguyen/memory-card-game',
  // },
  // {
  //   name: 'restaurant page',
  //   gif: '../../public/projects/restaurant.gif',
  //   demo: 'https://thanh-luan-nguyen.github.io/restaurant-page',
  //   code: 'https://github.com/thanh-luan-nguyen/restaurant-page',
  // },
  // {
  //   name: 'book keeping app',
  //   gif: '../../public/projects/library.gif',
  //   demo: 'https://thanh-luan-nguyen.github.io/book-keeping-app',
  //   code: 'https://github.com/thanh-luan-nguyen/book-keeping-app',
  // },
  // {
  //   name: 'cv-builder',
  //   gif: '../../public/projects/cv-builder.gif',
  //   demo: 'https://thanh-luan-nguyen.github.io/cv-builder',
  //   code: 'https://github.com/thanh-luan-nguyen/cv-builder',
  // },
  // {
  //   name: 'weather app',
  //   gif: '../../public/projects/weather.gif',
  //   demo: 'https://thanh-luan-nguyen.github.io/weather-app',
  //   code: 'https://github.com/thanh-luan-nguyen/weather-app',
  // },
  // {
  //   name: 'todolist app',
  //   gif: '../../public/projects/todolist.gif',
  //   demo: 'https://thanh-luan-nguyen.github.io/to-do-list',
  //   code: 'https://github.com/thanh-luan-nguyen/to-do-list',
  // },
  // {
  //   name: 'shopping website',
  //   gif: '../../public/projects/shopping.gif',
  //   demo: 'https://thanh-luan-nguyen.github.io/shopping-cart',
  //   code: 'https://github.com/thanh-luan-nguyen/shopping-cart',
  // },
  // {
  //   name: 'faekbook',
  //   gif: '../../public/projects/faekbook.gif',
  //   demo: 'https://thanh-luan-nguyen.github.io/faekbook',
  //   code: 'https://github.com/thanh-luan-nguyen/faekbook',
  // },
]

export default myProjects
