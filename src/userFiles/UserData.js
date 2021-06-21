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
            icon: "bi-house-fill",
            format: "text",
            tabs: {
                "NieReact": {
                    icon: "bi-house-fill",
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
                    icon: "bi-question-circle-fill",
                    left: {
                        header: "What is it?",
                        text: "NieReact is a NieR:Automata themed website template that was created using React. "
                    },
                    right: {
                        header: "Why is it?",
                        text: "I made a website just like this in December of 2020, but I didn't really bother making the code good at all. I wanted to make it better, and figured I'd do it in React as a learning experience sort of deal."
                    }
                },
				
				"Features": {
					icon: "bi-book-fill",
                    left: {
					    header: "hi",
                        text: "hi"
                    },
                    right: {
					    header: "hi",
                        text: "hello"
                    }
				}
            }
        },

        "Prereqs": {
            icon: "bi-house-fill",
            format: "text",
            tabs: {
                "Test": {
                    icon: "bi-archive",
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
                    icon: "bi-archive",
                    left: {
                        header: "left header",
                        text: "left textr"
                    },
                    right: {
                        header: "right header",
                        text: "right textr"
                    }
                },
            }
        },
		
		"Tutorial": {
            icon: "bi-house-fill",
            format: "text",
            tabs: {
                "Test": {
                    icon: "bi-archive",
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
                    icon: "bi-archive",
                    left: {
                        header: "left header",
                        text: "left textr"
                    },
                    right: {
                        header: "right header",
                        text: "right textr"
                    }
                },
            }
        },
		
		"Credits": {
            icon: "bi-house-fill",
            format: "text",
            tabs: {
                "Test": {
                    icon: "bi-archive",
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
                    icon: "bi-archive",
                    left: {
                        header: "left header",
                        text: "left textr"
                    },
                    right: {
                        header: "right header",
                        text: "right textr"
                    }
                },
            }
        }
		
    }
}

export default UserData;