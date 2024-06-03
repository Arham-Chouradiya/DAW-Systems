// UserInput.js
import React, { useState } from 'react';
import axios from 'axios';

const nationalities = [
    'AU', 'BR', 'CA', 'CH', 'DE', 'DK', 'ES', 'FI', 'FR', 'GB', 
    'IE', 'IN', 'IR', 'MX', 'NL', 'NO', 'NZ', 'RS', 'TR', 'UA', 'US'
];

function UserInput({ setUserData }) {
    const [gender, setGender] = useState('male'); // Default value set to 'male'
    const [nationality, setNationality] = useState('AU'); // Default value set to 'AU'
    const [results, setResults] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const response = await axios.get(`https://randomuser.me/api/?gender=${gender}&nat=${nationality}&results=${3}`);
        setUserData(response.data.results);
        } catch (error) {
        console.error('Error fetching data:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
        <label>
            Gender:
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            </select>
        </label>
        <label>
            Nationality:
            <select value={nationality} onChange={(e) => setNationality(e.target.value)}>
            {nationalities.map(nat => (
                <option key={nat} value={nat}>{nat}</option>
            ))}
            </select>
        </label>
        <button type="submit">Fetch Data</button>
        </form>
    );
}

export default UserInput;
