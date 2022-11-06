import { useState } from "react";

export default function TechAdd(props) {

    const[tech, setTech] = useState({
        techname:"",
        techcat:"",
        techdes:""
    });
    
    const {ajouteTechno} = props;
    

    function ajouteSubmit(evt) {
        evt.preventDefault();
        ajouteTechno(tech);
        setTech({
            techname:"",
            techcat:"",
            techdes:""
        })
    };

    function changeAjoute(evt){
       const {name, value} = evt.target;
        setTech({...tech, [name]: value});
    }

    return (
        <div className="tech-add">
            <h1>Ajout de techno</h1>
            <div>
                <form onSubmit={(evt) => ajouteSubmit(evt)}>
                    <label htmlFor="techname">Name:</label>
                    <br />
                    <input type="text" name="techname" id="techname" value={tech.techname} onChange={(evt) => changeAjoute(evt)}/>
                    <br />
                    <label htmlFor="techcat">Catégorie:</label>
                    <select name="techcat" id="techcat" value={tech.techcat} onChange={(evt) => changeAjoute(evt)}>
                        <option value="">Choisi une catégorie</option>
                        <option value="front">Front</option>
                        <option value="back">Back</option>
                        <option value="fullstack">Full Stack</option>
                        <option value="autre">Autre</option>
                        <option value=""></option>
                        <option value=""></option>
                    </select>
                    <br />
                    <label htmlFor="techdes">Name:</label>
                    <br />
                    <textarea type="text" name="techdes" id="techdes" cols="30" rows="10" value={tech.techdes} onChange={(evt) => changeAjoute(evt)}></textarea>
                    <br />
                    <input type="submit" value="Add Techno" className="btn"/>
                </form>
            </div>

        </div>
    );
};
