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
                "Test": {
                    icon: "",
                    left: {
                        header: "left header",
                        text: "left text",
                        image: "placeholder-klaus.jpg"
                    },
                    right: {
                        header: "right header",
                        text: "right text"
                    }
                },
                "Other One": {
                    icon: "",
                    left: {
                        header: "left header",
                        text: "left text"
                    },
                    right: {
                        header: "right header",
                        text: "right text"
                    }
                }
            }
        },

        "Tutorial": {
            icon: "bi-house-fill",
            format: "text",
            tabs: {
                "Test": {
                    icon: "",
                    left: {
                        header: "left header",
                        text: "left text"
                    },
                    right: {
                        header: "right header",
                        text: "right text"
                    }
                },
                "Other One": {
                    icon: "",
                    left: {
                        header: "left header",
                        text: "left text"
                    },
                    right: {
                        header: "right header",
                        text: "right text"
                    }
                },
            }
        }
    }
}

export default UserData;