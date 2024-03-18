let books = [
  {
    ISBN: "978-1400031347",
    name: "To Kill a Mockingbird",
    category: "Classic Fiction",
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRH6hp_-qSB1ewV6R-3zzkAcUtUBr2ubpZwHXgt7vNMc4g9J-Ci98ZDua5Mh688s0GDAaAEgJCsy9gjBrb-OJTN0Qh8DJR_u0WA9-n01H2Gp8LuhNQE-3pKTo9oWHL9tFd6QBamGxo&usqp=CAc",
    numberOfPages: 336,
    author: "Harper Lee",
    price: 10.99,
    sold: false,
  },
  {
    ISBN: "978-0743273565",
    name: "The Great Gatsby",
    category: "Classic Fiction",
    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSG6O_97uZ5lHDberpsxbT2Q5XzpaKvKceDJ2GL_KarxAh_pnLvXkEH0hh8lrsYN6CGlTqL-3rlFSIUNy8vdhLFO71jF4pODOaLbbJM8qra&usqp=CAc",
    numberOfPages: 180,
    author: "F. Scott Fitzgerald",
    price: 8.99,
    sold: false,
  },
  {
    ISBN: "978-0545010221",
    name: "Harry Potter and the Sorcerer's Stone",
    category: "Fantasy",
    image:
      "https://play-lh.googleusercontent.com/xZs_53RaXlrR90EDRPtfT54AEbsw2rxR2nXdfYtZHVyT7WExHQ8-Y-_uplt7xwrRXsIdAJ6llBBs_DbYXLg=w240-h480-rw",
    numberOfPages: 336,
    author: "J.K. Rowling",
    price: 12.99,
    sold: false,
  },
  {
    ISBN: "978-1400031347",
    name: "To Kill a Mockingbird",
    category: "Classic Fiction",
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRH6hp_-qSB1ewV6R-3zzkAcUtUBr2ubpZwHXgt7vNMc4g9J-Ci98ZDua5Mh688s0GDAaAEgJCsy9gjBrb-OJTN0Qh8DJR_u0WA9-n01H2Gp8LuhNQE-3pKTo9oWHL9tFd6QBamGxo&usqp=CAc",
    numberOfPages: 336,
    author: "Harper Lee",
    price: 10.99,
    sold: false,
  },
  {
    ISBN: "978-1400031347",
    name: "To Kill a Mockingbird",
    category: "Classic Fiction",
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRH6hp_-qSB1ewV6R-3zzkAcUtUBr2ubpZwHXgt7vNMc4g9J-Ci98ZDua5Mh688s0GDAaAEgJCsy9gjBrb-OJTN0Qh8DJR_u0WA9-n01H2Gp8LuhNQE-3pKTo9oWHL9tFd6QBamGxo&usqp=CAc",
    numberOfPages: 336,
    author: "Harper Lee",
    price: 10.99,
    sold: false,
  },
  {
    ISBN: "978-0743273565",
    name: "The Great Gatsby",
    category: "Classic Fiction",
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQIho-WEc7adfFF0-4rR9Y3WxLL6LrC-EiHLIQ9qfc7e5uadoQ_qlXXzQemrU-cbU3ysAeotUAQ1PcN4PFEu9q7Rscp6FIDoIgzNLw-clgZK34OYQacV_Y9N7mm6zOtgaazlQaMTukk&usqp=CAc",
    numberOfPages: 180,
    author: "F. Scott Fitzgerald",
    price: 8.99,
    sold: false,
  },
  {
    ISBN: "978-0743273565",
    name: "The Great Gatsby",
    category: "Classic Fiction",
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQIho-WEc7adfFF0-4rR9Y3WxLL6LrC-EiHLIQ9qfc7e5uadoQ_qlXXzQemrU-cbU3ysAeotUAQ1PcN4PFEu9q7Rscp6FIDoIgzNLw-clgZK34OYQacV_Y9N7mm6zOtgaazlQaMTukk&usqp=CAc",
    numberOfPages: 180,
    author: "F. Scott Fitzgerald",
    price: 8.99,
    sold: false,
  },
  {
    ISBN: "978-0743273565",
    name: "The Great Gatsby",
    category: "Classic Fiction",
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQIho-WEc7adfFF0-4rR9Y3WxLL6LrC-EiHLIQ9qfc7e5uadoQ_qlXXzQemrU-cbU3ysAeotUAQ1PcN4PFEu9q7Rscp6FIDoIgzNLw-clgZK34OYQacV_Y9N7mm6zOtgaazlQaMTukk&usqp=CAc",
    numberOfPages: 180,
    author: "F. Scott Fitzgerald",
    price: 8.99,
    sold: false,
  },
  {
    ISBN: "978-0545010221",
    name: "Harry Potter and the Sorcerer's Stone",
    category: "Fantasy",
    image:
      "https://play-lh.googleusercontent.com/xZs_53RaXlrR90EDRPtfT54AEbsw2rxR2nXdfYtZHVyT7WExHQ8-Y-_uplt7xwrRXsIdAJ6llBBs_DbYXLg=w240-h480-rw",
    numberOfPages: 336,
    author: "J.K. Rowling",
    price: 12.99,
    sold: false,
  },
  {
    ISBN: "978-0545010221",
    name: "Harry Potter and the Sorcerer's Stone",
    category: "Fantasy",
    image:
      "https://play-lh.googleusercontent.com/xZs_53RaXlrR90EDRPtfT54AEbsw2rxR2nXdfYtZHVyT7WExHQ8-Y-_uplt7xwrRXsIdAJ6llBBs_DbYXLg=w240-h480-rw",
    numberOfPages: 336,
    author: "J.K. Rowling",
    price: 12.99,
    sold: false,
  },
  {
    ISBN: "978-0545010221",
    name: "Harry Potter and the Sorcerer's Stone",
    category: "Fantasy",
    image:
      "https://play-lh.googleusercontent.com/xZs_53RaXlrR90EDRPtfT54AEbsw2rxR2nXdfYtZHVyT7WExHQ8-Y-_uplt7xwrRXsIdAJ6llBBs_DbYXLg=w240-h480-rw",
    numberOfPages: 336,
    author: "J.K. Rowling",
    price: 12.99,
    sold: false,
  },
  {
    ISBN: "978-0545010221",
    name: "Harry Potter and the Sorcerer's Stone",
    category: "Fantasy",
    image:
      "https://play-lh.googleusercontent.com/xZs_53RaXlrR90EDRPtfT54AEbsw2rxR2nXdfYtZHVyT7WExHQ8-Y-_uplt7xwrRXsIdAJ6llBBs_DbYXLg=w240-h480-rw",
    numberOfPages: 336,
    author: "J.K. Rowling",
    price: 12.99,
    sold: false,
  },
];
