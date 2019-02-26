import React from 'react';
import TextInput from '../common/TextInput';

const ExerciseForm = ({exercise, onSave, onChange}) => {
  return (
    <form>
      <TextInput
        name="name"
        value={exercise.name}
        label="Nombre"
        onChange={onChange}
      />

      <TextInput
        name="pic"
        value={exercise.pic}
        label="Imagen"
        onChange={onChange}
      />

        <TextInput
          name="description"
          value={exercise.description}
          label="Descripción"
          onChange={onChange}
        />

      <input type="submit" onClick={onSave} className="btn btn-primary" />
    </form>
  );
};

export default ExerciseForm;
