import React, { useEffect } from 'react';
import Character from './Character';
import { connect } from 'react-redux';
import { fetchAllCharacters } from '../actions';

const Characters = (props) => {

    useEffect(() => {
        props.fetchAllCharacters();
      })
    
    return (
        <div className="character-list">
            {
               props.characters.map(character => (
                   <Character 
                        key={character.id}
                        image={character.image} 
                        name={character.name} 
                        status={character.status} 
                        gender={character.gender} 
                        location={character.location.name}
                    /> 
               )) 
            }
        </div>
    );
}

  const mapStateToProps = (state) => {
    return {
        characters: state.characters,
    }
  }
  
  export default connect(mapStateToProps, { fetchAllCharacters })(Characters);