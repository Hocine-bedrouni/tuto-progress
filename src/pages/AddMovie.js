import React from 'react'

export default function AddMovie() {
    return (
        <div className='ajout-film'>
            <h1>Ajout de film</h1>
            <div>
                <form>
                    <label htmlFor='moviename'>Nom:</label>
                    <br />
                    <input type="text" name="moviename" id="moviename"/>
                    <br />
                    <label htmlFor='moviegenre'>Genre:</label>
                    <select name="moviegenre" id="moviegenre">
                        <option value="">Choisi un genre de film</option>
                        <option value="action">Action</option>
                        <option value="comedie">Comédie</option>
                        <option value="horreur">Horreur</option>
                        <option value="science-fiction">science-fiction</option>
                        <option value="suspense">Suspense</option>
                        <option value="romantique">Romantique</option>
                    </select>
                    <br />
                    <input type="submit" value="AddFilm" className="btn"/>
                </form>
            </div>
            
        </div>
    )
}

 
