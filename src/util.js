import {v4 as uuidv4} from "uuid";

const Chillhop = () => {
    return [
        {
            name: "Sailing on a Flying Boat",
            artist: "Enzalla",
            id: uuidv4(),
            cover: "https://i.scdn.co/image/ab67616d0000b2734dbbff68622228d0949f9803",
            active: true,
            color: ["#4E8359", "#CD4C4D"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=12157"
        },
        {
            name: "Soul Samba",
            artist: "Screen Jazzmaster, Zmeyev",
            id: uuidv4(),
            cover: "https://chillhop.com/wp-content/uploads/2021/03/75adfe0661d06a9ea66d9c2e99b31e92ae450ebe-1024x1024.jpg",
            active: false,
            color: ["#D59D2E", "#3DBBA3"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=12153"
        },
        {
            name: "Romance",
            artist: "RenBoz",
            id: uuidv4(),
            cover: "https://chillhop.com/wp-content/uploads/2021/03/75adfe0661d06a9ea66d9c2e99b31e92ae450ebe-1024x1024.jpg",
            active: false,
            color: ["#D59D2E", "#3DBBA3"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=16064"
        },
        {
            name: "Cruising",
            artist: "Evil Needle",
            id: uuidv4(),
            cover: "https://chillhop.com/wp-content/uploads/2021/04/cb0cc6270d7f2e1bb13e44e8832bd5c9b2a61080-1024x1024.jpg",
            active: false,
            color: ["#EB594C", "#A28C81"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=17087"
        },
        {
            name: "Dive",
            artist: "Evil Needle, Venuz Beats",
            id: uuidv4(),
            cover: "https://chillhop.com/wp-content/uploads/2021/04/cb0cc6270d7f2e1bb13e44e8832bd5c9b2a61080-1024x1024.jpg",
            active: false,
            color: ["#EB594C", "#A28C81"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=17089"
        },
        {
            name: "Memories",
            artist: "Misha, Screen Jazzmaster",
            id: uuidv4(),
            cover: "https://uploads-ssl.webflow.com/5fc4bca9bd65e8f2bf87f576/605072dd8914772a1df825a9_ow9bl5athaeho9m.jpg",
            active: false,
            color: ["#EB594C", "#A28C81"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=12153"
        },
    ]
};

export default Chillhop;