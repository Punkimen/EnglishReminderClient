import { useState, type FC } from 'react';

interface IAddedFormProps {
  addCard: (value: string, translate: string) => void;
}

export const AddedForm: FC<IAddedFormProps> = ({ addCard }) => {
  const [value, setValue] = useState('');
  const [translate, setTranslate] = useState('');

  const resetForm = () => {
    setValue('');
    setTranslate('');
  };

  return (
    <div>
      <div className="inputs">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter text in English"
        />
        <input
          type="text"
          value={translate}
          onChange={(e) => setTranslate(e.target.value)}
          placeholder="Переведите текст на русский"
        />
      </div>
      <button
        onClick={() => {
          resetForm();
          addCard(value, translate);
        }}
      >
        Add Card
      </button>
    </div>
  );
};
