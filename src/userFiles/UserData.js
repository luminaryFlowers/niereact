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
                        text: "NieReact is a NieR:Automata themed website template that was created using React."
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
                        text: <p>
                            You can find me on Twitter <a href="https://twitter.com/_lumens">@_lumens</a>,
                            or on GitHub at <a href="https://github.com/tortoisetea">tortoisetea</a>.<br />
					    </p>
                    },
                    right: {
					    header: "hi",
                        text: "hello"
                    }
				}

            }
        },

        "Features": {
            icon: "tools",
            tabs: {

                "General Overview": {
                    icon: "house-fill",
                    left: {
                        header: "Overview",
                        text: "The "
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

                "Preface": {
                    icon: "book-fill",
                    left: {
                        header: "Preface",
                        text: "This tutorial will mostly focus on how to use NieReact, and will not go into much depth on things such as GitHub repository cloning, or installing Node, Git and the like. There are a great amount of resources on these topics already, so I figured it would be a little bit redundant."
                    },
                    right: {
                        header: "Preface",
                        text: "I probably won't be able to help with installing things (it's been a while since I had to), but if you encounter any issues/bugs with NieReact itself, feel free to contact me!"
                    }
                },

                "Requirements": {
                    icon: "file-earmark-arrow-down-fill",
                    left: {
                        header: "App Requirements",
                        text: <p>
                            - Git <br/>
                            - Node <br/>
                            - A text editor (Notepad works but Notepad++ is nicer)
                        </p>
                    },
                    right: {
                        header: "Other Requirements",
                        text: <p>
                            - A GitHub account <br/>
                            - Time <br/>
                            - (Optional) HTML knowledge
                        </p>
                    }
                },

                "Fork Repository": {
                    icon: "star-fill",
                    left: {
                        header: "Fork Repository",
                        text: <p>
                            Once you've met the requirements, you can fork the <a href="https://github.com/tortoisetea/niereact">NieReact repository</a>,
                            and then rename the repository to whatever you'd like. I'd recommend naming it (your GitHub username).github.io, as that will
                            make that the link to your website.
                        </p>
                    },
                    right: {
                        header: "Note",
                        text: "If the repository isn't (your GitHub username).github.io, then the link to your website will be (your GitHub username).github.io/(repository name)."
                    }
                },

                "Clone Repository": {
                    icon: "star-fill",
                    left: {
                        header: "Clone Repository",
                        text: ""
                    },
                    right: {
                        header: "Note",
                        text: "If the repository isn't (your GitHub username).github.io, then the link to your website will be (your GitHub username).github.io/(repository name)."
                    }
                },

                "User Files": {
                    icon: "star-fill",
                    left: {
                        header: "User Files",
                        text: "Inside of the \"src\" folder of the newly forked"
                    },
                    right: {
                        header: "Other Requirements",
                        text: ""
                    }
                }

            }
        },
		
		"Contact": {
            icon: "person-fill",
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