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
                    icon: "bi-archive",
                    left: {
                        header: "left header",
                        text: "left textt",
                        image: "placeholder-klaus.jpg"
                    },
                    right: {
                        header: "right header",
                        text: "right textttt"
                    }
                },
                "Other One": {
                    icon: "bi-archive",
                    left: {
                        header: "left header",
                        text: "left textm"
                    },
                    right: {
                        header: "right header",
                        text: "right textm"
                    }
                }
            }
        },

        "テスト": {
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