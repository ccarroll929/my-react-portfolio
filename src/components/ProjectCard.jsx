// Function that generates a Project Card using data from Project.jsx
export const ProjectCard = ({ title, projectLink, githubLink, imgUrl }) => {
    const responsive = {
        largeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
        };

return (
    <div className="item">
        <h5>{title}</h5>
        <a href={projectLink}><img src={imgUrl}/></a>
        <a href={githubLink}><h6>Link to GitHub Repo</h6></a>
    </div>
)}