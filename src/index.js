wp.blocks.registerBlockType("wp-posts-slider/custom-block",{
    title: "Company Contact Information'",
    icon: "smiley",
    category: "design",
    attributes: {
        postsCount: { type: "string"}
    },
    edit: (props) => {
        function updatePostsCount(event){
            props.setAttributes({postsCount: event.target.value})
        }
        return (
            <div>
            <h3>This is JSX Title</h3>
            <input type="text" placeholder="Posts Count" value={props.attributes.postsCount} onChange={updatePostsCount}/>
            </div>
        );
    },
    save: function(props){

        return (<h3>This is JSX {props.attributes.postsCount}</h3>);
    } 


})