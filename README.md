Nous aimerions proposer un site qui permet de visualiser graphiquement les jeux vidéo les plus vendus dans le monde. Pour cela, nous avons commencé par chercher un jeu de données qui répertorie diverses données à propos des jeux et nous avons trouvé un dataset sur Kaggle crée par Gregory Smith qui répertorie tous les jeux vendus à plus de 100'000 exemplaires et est basé sur BeautifulSoup, une bibliothèque Python qui permet d'extraire des données à partir de documents HTML et XML. Il l'a webscrapé depuis vgchartz.com avec les données présente dans la database que l'on peut retrouver dans charts>game totals.

Les données se séparent en différentes colonnes et sont de différents types, on y trouve :
•	Rank qui donne un nombre à un jeu en fonction de s'il est le plus vendu ou non sous forme de integer
•	Name qui représente le nom du jeu sous forme de string
•	Platform qui représente le nom de la console qui permet de jouer au jeu sous forme de string
•	Year qui représente l'année de sorti d'un jeu sous forme de float
•	Genre qui représente le genre d'un jeu-vidéo (par exemple: sport, course, puzzle, etc…) sous forme de string
•	Publisher qui représente l'entreprise qui a sorti ce jeu sous forme de string
•	NA_Sales, EU_Sales, JP_Sales, Other_Sales et Global_Sales qui représente respectivement les ventes en Amérique du nord, en Europe, au Japon, dans le reste du monde et globalement sous forme de float

Notre est de représenter ces données de manières plus graphique, grâce à cela nous allons pouvoir observer rapidement les leader en terme de vente dans les jeux vidéo que ce soit les entreprises, les consoles et les licences. Mais grâce aux ventes par régions, nous allons pouvoir afficher les genre de jeux auxquels certaine population sont plus sensibles.

Ce dataset a été téléchargé plus de 400'000 fois
