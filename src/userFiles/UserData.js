/*
    notes:
    - you cannot have pages with identical names

    - a page cannot contain 2 tabs with identical names
      (different pages having the same tab name is ok!)
 */

let UserData = {
    title: "NieReact",
    pageData: {
		
        "Home": {
            icon: "house-fill",
            tabs: {

                "NieReact": {
                    icon: "house-fill",
                    left: {
                        header: "Welcome",
                        text: "This is a sample website for NieReact! This website contains a guide on how to get your own NieR:Automata themed website up and running."
                    },
                    right: {
                        header: "Sample Image",
                        text: "idk what to put here lol",
                        image: "placeholder-klaus.jpg"
                    }
                },
				
                "What is NieReact?": {
                    icon: "question-circle-fill",
                    left: {
                        header: "What is it?",
                        text: "NieReact is a NieR:Automata themed website template that was created using React. "
                    },
                    right: {
                        header: "Why is it?",
                        text: "I made a website just like this in December of 2020, but I didn't really bother making the code good at all. I wanted to make it better, and figured I'd do it in React as a learning experience sort of deal."
                    }
                },
				
				"Who made it?": {
					icon: "question-circle-fill",
                    left: {
					    header: "Me",
                        text: <span>
                            You can find me on Twitter <a href="https://twitter.com/_lumens">@_lumens</a>,
                            or on GitHub at <a href="https://github.com/tortoisetea">tortoisetea</a>.<br />
                            (both of those are links by the way)
					    </span>
                    },
                    right: {
					    header: "hi",
                        text: "hello"
                    }
				}

            }
        },

        "Features": {
            icon: "house-fill",
            tabs: {

                "NieReact": {
                    icon: "house-fill",
                    left: {
                        header: "e",
                        text: "e"
                    },
                    right: {
                        header: "e",
                        text: "e"
                    }
                },

                "test2": {
                    icon: "house-fill",
                    left: {
                        header: "e",
                        text: "e"
                    },
                    right: {
                        header: "e",
                        text: "e"
                    }
                }

            }
        },
		
		"Tutorial": {
            icon: "book-fill",
            tabs: {

                "Test": {
                    icon: "archive",
                    left: {
                        header: "left header",
                        text: "left texte"
                    },
                    right: {
                        header: "right header",
                        text: "right texte"
                    }
                },
                "Other One": {
                    icon: "archive",
                    left: {
                        header: "left header",
                        text: "left textr"
                    },
                    right: {
                        header: "right header",
                        text: "right textr"
                    }
                }

            }
        },
		
		"Extra": {
            icon: "plus-circle-fill",
            tabs: {

                "Testt": {
                    icon: "archive",
                    left: {
                        header: "left header",
                        text: "left texte"
                    },
                    right: {
                        header: "right header",
                        text: "right texte"
                    }
                },

                "Other One": {
                    icon: "archive",
                    left: {
                        header: "left header",
                        text: "left textr"
                    },
                    right: {
                        header: "right header",
                        text: "right textr"
                    }
                }

            }
        }
		
    }
}

export default UserData;