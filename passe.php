<!DOCTYPE html>
<html lang="fr">


<head>
    <title>LysDoc</title>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script type="text/javascript" src="scriptpasse.js"></script>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>

<body>
    <header>
        <div class="block__header">
            <div class="header__tite_logo">
                <a href="#"><img src="img/logo/logo.png" alt="Logo" id="logo__header"></a>
                <h1>LYSBOWL</h1>
            </div>
            <div>
                <nav>
                    <ul>
                        <li><a href="index.html">Accueil</a></li>
                        <li><a href="cartes.html">Cartes</a></li>
                        <li><a href="dés.html">Dès</a></li>
                        <li><a href="passe.php">Passes</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
    
    <main>
        <div class="block__passe">
            <h2 class="titre__cartes"> Passes & Interceptions</h2>
            <p>En construction</p>
            <table>
            <tr>
                <?php for($i=0; $i<16; $i++): ?>
                    <td></td>
                <?php endfor; ?>
            </tr>
                <?php for ($i = 13; $i >= 0; $i--) { ?>
                    <tr>
                        <td><?php echo $i ?></td>
                        <?php for ($j = 1; $j < 16; $j++) { ?>
                            <td></td>
                        <?php } ?>
                    </tr>
                <?php } ?>
                <tr>
                    <td class="empty"></td>
                    <?php for ($i = 0; $i < 14; $i++) { ?>
                        <td><?php echo $i ?></td>
                    <?php } ?>
                    <td class="empty"></td>
                </tr>
            </table>
        </div>

        <script src="js/scriptpasse.js"></script>
    </main>
    </body>
    </html>