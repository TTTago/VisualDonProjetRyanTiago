Nous aimerions proposer un site qui permet de visualiser graphiquement les jeux vidéo les plus vendus dans le monde. Pour cela, nous avons commencé par chercher un jeu de données qui répertorie diverses données à propos des jeux et nous avons trouvé un dataset sur Kaggle créé par Gregory Smith qui répertorie tous les jeux vendus à plus de 100'000 exemplaires et est basé sur BeautifulSoup, une bibliothèque Python qui permet d'extraire des données à partir de documents HTML et XML. Il l'a webscrapé depuis vgchartz.com avec les données présentes dans la database que l'on peut retrouver dans charts>game totals.

URL dataset: https://www.kaggle.com/datasets/gregorut/videogamesales

Les données se séparent en différentes colonnes et sont de différents types, on y trouve :


•	Rank qui donne un nombre à un jeu en fonction de s'il est le plus vendu ou non sous forme de integer

•	Name qui représente le nom du jeu sous forme de string

•	Platform qui représente le nom de la console qui permet de jouer au jeu sous forme de string

•	Year qui représente l'année de sortie d'un jeu sous forme de float

•	Genre qui représente le genre d'un jeu vidéo (par exemple: sport, course, puzzle, etc…) sous forme de string

•	Publisher qui représente l'entreprise qui a sorti ce jeu sous forme de string

•	NA_Sales, EU_Sales, JP_Sales, Other_Sales et Global_Sales qui représente respectivement les ventes en Amérique du nord, en Europe, au Japon, dans le reste du monde et globalement sous forme de float

Notre but est de représenter ces données de manières plus graphique, grâce à cela nous allons pouvoir observer rapidement les leaders en terme de vente dans les jeux vidéo que ce soit les entreprises, les consoles ou/et les licences. Mais grâce aux ventes par région, nous allons pouvoir afficher les genres de jeux auxquels certaines populations sont plus sensibles. Il sera également possible de voir quels genres ont été les plus populaires en fonction des années.

Ce dataset a été téléchargé plus de 400'000 fois et on retrouve sur Kaggle plus de 1200 collections utilisant ces données réalisant divers graphiques et nous proposant le code qui permet de les réaliser. On retrouve des remerciements envers Gregory Smith et son jeu de données dans un article. Une recherche de l'Université de Sydney s'est également basé sur ces données, cette recherche analyse la consommation des jeux vidéo partout dans le monde et les tendances dans les genres les plus populaires variants dans le temps.

URL article : https://medium.com/the-peruser/a-brief-history-of-video-game-sales-49edbf831dc
URL Projet universitaire : http://rstudio-pubs-static.s3.amazonaws.com/478680_9fc7dcfb4fda42a1a59cd4af7e763a6c.html
