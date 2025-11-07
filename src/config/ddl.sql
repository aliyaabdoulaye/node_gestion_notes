CREATE TABLE IF NOT EXISTS students (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    firstname TEXT NOT NULL,
    lastname TEXT NOT NULL,
    sexe TEXT CHECK(sexe IN ('Masculin', 'Feminin')) DEFAULT 'Masculin',
    birth_day TEXT
);
