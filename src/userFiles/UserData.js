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

                "General Overview": {
                    icon: "question-circle-fill",
                    left: {
                        header: "Overview",
                        text: "NieReact is a React-based website template with a relatively easy-to-use data file for easily making your own NieR:Automata themed website."
                    },
                    right: {
                        header: "Overview",
                        text: "You don't need to know how to code to use it! It'll just take a bit to set up if you've never worked with any of the stuff before. Also this website doesn't have guides for setting up Node.js or your GitHub account, sorry! Shouldn't be too tough though!"
                    }
                },

                "Small Notes": {
                    icon: "question-circle-fill",
                    left: {
                        header: "Who made it?",
                        text: "I did! Me! Wow! I'm Aidan, but I also go by Dave online, but I'm also using the name Lumen, or lumens, for coding accounts. You can find info on how to contact me, or look at my GitHub, or buy me a coffee, on the contact page!"
                    },
                    right: {
                        header: "Site practices",
                        text: "On this site, if you see anything enclosed in >this sort of thing<, that'll be a link. Not this time though, but every other time."
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
                        text: "This tutorial will mostly focus on how to use NieReact, and will not go into much depth on GitHub or installing Node.js, but there's a wealth of resources on these sorts of things online!"
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
                            - Node.js <br/>
                            - A text editor (Notepad works but Notepad++ is nicer) (Something like VSCode or WebStorm would also be able to catch syntax errors, but it might be a bit silly to bother if you're not using it for anything but NieReact!)
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

                "1. Repository": {
                    icon: "star-fill",
                    left: {
                        header: "Create Repository",
                        text: "First, you'll need to create a repository on GitHub. I'd recommend naming it (your GitHub username).github.io, because otherwise, the link to your website will be (your GitHub username).github.io/(repository name)."
                    },
                    right: {
                        header: "Add gh-pages branch",
                        text: "Once you've created the repository, enter it, and then click on the button containing \"master\" (to the left of where it says \"1 branch\"), and, in the text field saying \"find or create branch\", create a branch named gh-pages. We'll go back here later!"
                    }
                },

                "2. Download & Setup": {
                    icon: "star-fill",
                    left: {
                        header: "Download & setup",
                        text: <p>Download niereact-v1.0.zip from <a href="https://github.com/tortoisetea/niereact/releases/tag/v1.0">&gt;here&lt;</a>, and unzip. Then, you'll need to open a command prompt in the niereact folder, and run "npm install". Please note that this step may take a bit.</p>
                    },
                    right: {
                        header: "Previewing the site",
                        text: "If you want to preview the site while you're working on it, open a command prompt and run \"npm start\". The page will update every time you save, which is very handy!"
                    }
                },

                "3. User Files": {
                    icon: "star-fill",
                    left: {
                        header: "User Files",
                        image: "user-files.jpg",
                        text: "Inside of the \"userFiles\" folder in the \"src\" folder, you'll find the UserData.js file, and the images folder."
                    },
                    right: {
                        header: "User Files",
                        text: "You'll put any images that you want displayed inside of the images folder. I recommend a 16:9 aspect ratio jpg file, but any file type works! Inside of UserData.js, however, is where all of the site information goes, including pages, and what tabs those pages have."
                    }
                },

                "4. What Is UserData.js?": {
                    icon: "star-fill",
                    left: {
                        header: "What is UserData.js?",
                        text: "UserData.js is a JavaScript file, and contains all of the website's \"data.\" By that, I mean that all of the website's contents, including pages and tabs, are formed from this file. This means that you can use this website template without knowing how to use JavaScript! (Hopefully!)"
                    },
                    right: {
                        header: "How do I use it?",
                        text: "You'll need to open the file in a text editor. Notepad works just fine, but you might find it easier to edit with Notepad++."
                    }
                },

                "5a. Object Structure": {
                    icon: "star-fill",
                    left: {
                        header: "JavaScript Object Structure",
                        text: "Objects in JavaScript are pretty much blocks that are enclosed by curly braces, which are {these guys}. The contents of these curly braces are then made up of \"key/value pairs\", and separated by commas. A key/value pair is separated by a colon."
                    },
                    right: {
                        header: "Example",
                        image: "object-example.jpg",
                        text: "In this, \"disappointment\" and \"day\" are keys, and \"immeasurable\" and \"ruined\" are their respective values."
                    }
                },

                "5b. Object Structure Cont.": {
                    icon: "star-fill",
                    left: {
                        header: "Example",
                        image: "object-in-object-example.jpg",
                        text: "Here, you can see that a value can also be an object."
                    },
                    right: {
                        header: "Importance",
                        text: "I swear I did not subject you to this for no reason! This is handy to know for reading UserData.js, because each tab is an object, and each page is an object. Next, we'll dive into the actual UserData.js!!! Finally!!!!!"
                    }
                },

                "6. UserData.js Intro": {
                    icon: "star-fill",
                    left: {
                        header: "Intro",
                        text: "When you first open the file, you'll see a lot of things. The most important thing is the object that is following \"let UserData = \", so ignore the rest of it. We'll be going through the file in levels or stages, starting from the base level!"
                    },
                    right: {
                        header: "Intro",
                        image: "user-data-0.jpg",
                        text: "The value of title is the title of the page, which shows in your browser's tabs."
                    }
                },

                "7a. Page Data": {
                    icon: "star-fill",
                    left: {
                        header: "pageData",
                        image: "user-data-1.jpg",
                        text: "Moving into the pageData section of UserData, page stuff goes here."
                    },
                    right: {
                        header: "pageData",
                        text: "The value of pageData is an object, and each key in this object is the name of a page. On the website you're on now, these are \"Home\", \"Features\", \"Tutorial\", and \"Contact\"! Each page's value is an object, each of which has an \"icon\" and \"tabs\" key/value pair."
                    }
                },

                "7b. Icons": {
                    icon: "star-fill",
                    left: {
                        header: "Bootstrap Icons",
                        text: <p>NieReact uses <a href="https://icons.getbootstrap.com/">&gt;Bootstrap Icons&lt;</a> for the page and tab icons! Wherever there's an option for "icon" in the user data file, you can use a Bootstrap Icon for it.</p>
                    },
                    right: {
                        header: "Example",
                        image: "user-data-2.jpg",
                        text: "Easy peasy!"
                    }
                },

                "8a. Tabs": {
                    icon: "star-fill",
                    left: {
                        header: "Sorry this image is small",
                        image: "user-data-3.jpg",
                        text: "Here's where the tab information goes for a given page."
                    },
                    right: {
                        header: "Explanation",
                        text: "Each tab has an icon, and a left and right object. The left and right objects correspond to the contents of the middle and right boxes of the page. Both of these objects have a \"header\" and \"text\", which will fill in the header (black bar) and the text content for the box."
                    }
                },

                "8b. Tab Images": {
                    icon: "star-fill",
                    left: {
                        header: "Tab Images",
                        text: "Optionally, you can add an image to a box! Simply by adding a \"image\" key to either the left or right object, with the value corresponding to the name of an image in the images folder of userFiles (case sensitive!). Order does not matter with keys, however! It could go header-image-text, or image-header-text; all work."
                    },
                    right: {
                        header: "Example (sorry for small image)",
                        image: "user-data-4.jpg",
                        text: "Here's the tab from the previous step, but with the image key added to it."
                    }
                },

                "9a. Extra Notes": {
                    icon: "star-fill",
                    left: {
                        header: "Adding new pages/tabs",
                        text: "The easiest way to add a new page/tab is by simply copying an existing one. You'll want to copy from the name of the page/tab until the closing curly bracket for it, then add a comma after that curly bracket, then paste what you've copied."
                    },
                    right: {
                        header: "Misc notes",
                        text: <p>
                            - A base template UserData.js file can be found already in the userFiles folder in the forked repository. Additionally, the UserData.js for this site can be found in extraUserFiles!<br/>
                            - Instead of text in quotation marks, you can use HTML elements in the object file. An example is in the UserData.js file for this site.
                        </p>
                    }
                },

                "9b. Extra Extra Notes": {
                    icon: "star-fill",
                    left: {
                        header: "Quotation Marks",
                        text: "If you want to have a quotation mark inside of the text for a tab, you'll need to have a backslash (this guy -> \\) before each. So it'll look like this: \\\""
                    },
                    right: {
                        header: "I can't think of more notes",
                        text: "But I have this extra box! What ever shall I do..... Well, if I have more notes in the future, they'll go here!"
                    }
                },

                "10. Making It Live": {
                    icon: "star-fill",
                    left: {
                        header: "Build it",
                        text: "Open up a command prompt in the main directory (the one with the \"src\" and \"public\" folder and such), and type \"npm run build\". This will probably take a while, so don't stress if it does! Once it's completed, open the newly created build folder."
                    },
                    right: {
                        header: "Upload the build",
                        text: "In the gh-pages branch of your repository, click on \"Add file\", then \"Upload files\". From here, drag and drop everything in the build folder into the upload area, and choose \"Commit changes\". If everything went right, your website should be good to go! It might take a bit to update though, so you may need to wait a few minutes."
                    }
                }

            }
        },
		
		"Contact": {
            icon: "person-fill",
            tabs: {

                "Twitter": {
                    icon: "twitter",
                    left: {
                        header: "Coding account",
                        text: <p>The account that I tweet about coding/projects on is <a href="https://twitter.com/_lumens">&gt;@_lumens&lt;</a>. If you want to see what I'm working on, check out that account!</p>
                    },
                    right: {
                        header: "Main account",
                        text: <p>My main Twitter account is <a href="https://twitter.com/daveharwood_">&gt;@daveharwood_&lt;</a>. I tweet a lot, and about a lot of random interests, so I don't recommend following me here, but feel free to!</p>
                    }
                },

                "GitHub/Ko-fi": {
                    icon: "house-fill",
                    left: {
                        header: "GitHub",
                        text: <p>My GitHub account is <a href="https://github.com/tortoisetea">&gt;tortoisetea&lt;</a>! You can see my cool repositories, which I do not have many of, because a lot of them are private.</p>
                    },
                    right: {
                        header: "Ko-fi",
                        text: <p>If you are thinking "wow this is cool and I have an excess of money for reasons I will not divulge and would like to give some to this guy", my Ko-fi is <a href="https://ko-fi.com/lumens">&gt;lumens&lt;</a>! Don't send me money if you need it or are saving up for a cool Klaus von Reinherz figurine though! I understand!</p>
                    }
                }

            }
        }
		
    }
}

export default UserData;