

export default function TechList(props) {
    const {techs} = props;
    return (
        <div className="tech-list">
            <h1>Toutes les Technos</h1>
            <p>Todo Affiche toutes les technos</p>
            <div>
                {
                    techs.map(tech =>(
                        <div>
                            <h2>{tech.techname}</h2>
                            <h3>Category</h3>
                            <p>{tech.techcat}</p>
                            <h3>Description</h3>
                            <p>{tech.techdes}</p>
                        </div>
                    ))
                }
            </div>
            
        </div>
    );
};

