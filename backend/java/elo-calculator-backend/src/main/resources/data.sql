INSERT INTO player(user_name, display_name, email, elo) VALUES ('Max Mustermann', 'Maxi', 'max.mustermann@iits-consulting.de', 42);
INSERT INTO player(user_name, display_name, email, elo) VALUES ('Lieschen Müller', 'Lisa', 'lieschen.mueller@iits-consulting.de', 1337);

INSERT INTO match(id, white_player_user_name, black_player_user_name, outcome, played_on) VALUES ('11111111-58cc-4372-a567-0e02b2c3d479', 'Max Mustermann', 'Lieschen Müller', 'BLACK_WINS', '2023-12-26T21:40');
INSERT INTO match(id, white_player_user_name, black_player_user_name, outcome, played_on) VALUES ('22222222-58cc-4372-a567-0e02b2c3d479', 'Lieschen Müller', 'Max Mustermann', 'WHITE_WINS', '2023-12-24T21:40');