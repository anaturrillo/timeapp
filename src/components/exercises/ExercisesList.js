import React from 'react';

const ExercisesList = ({exercises, deleteExercise, editExercise}) => {
  return (
    <table className="table">
      <tbody>
      {exercises.map(function (e) {
        return (<tr key={e.id}>
          <td>
            {e.name}
          </td>
          <td>
            <img src={e.pic} />
          </td>
          <td>
            {e.description}
          </td>
          <td><input value="Borrar" type="button" onClick={deleteExercise(e.id)}/></td>
          <td><input value="Editar" type="button" onClick={editExercise(e.id)}/></td>
        </tr>)
      })}
      </tbody>
    </table>
  );
};

export default ExercisesList;