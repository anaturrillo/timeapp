import React from 'react';

const RoutinesList = ({routines, deleteRoutine, playRoutine}) => {
  return (
    <table>
      <tbody>
        {routines.map(e => {
          return (<tr key={e.id}>
            <td>
              {e.name}
            </td>
            <td>
              {e.description}
            </td>
            <td>
              <input type="button" value="play" onClick={playRoutine(e.id)}/>
            </td>
          </tr>)
        })}
      </tbody>
    </table>
  );
};

export default RoutinesList;