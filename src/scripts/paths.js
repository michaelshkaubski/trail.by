const path = () => {

    let paths = []

    paths.push(
        "M0,248.6L326.3,0h501.2v462.5l-87.4,113.1l-259.5-56.7L356.9,644.8l-209.1-30.5L73.9,431.5L0,248.6z",
        "M82.4,612L0,247.4l137.8-123.7L275.6,0h274.2H824v460.3L549.9,612l-244.8-62.4L82.4,612z",
        "M0,556.7V137.4L221.9,0l353.6,51l237-51v503.2L736,625l-278-68.3L340,625L0,556.7z",
        "M56.1,576.2L0,268.4L196.3,0l333.6,51.7L827.5,0v438.7L715.8,576.2L505.3,644L252.4,528.8L56.1,576.2z"
    )
    return paths[Math.floor(Math.random() * Math.floor(4))];
}

export default path
