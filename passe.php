<!DOCTYPE html>
<html lang="fr">


<head>
    <title>LysDoc</title>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script type="text/javascript" src="scriptpasse.js"></script>
    <style>/**------------------PASEES & INTERCEPTION ------------Style PHP*/
.block__passe{
    display: flex;
    flex-direction: column;
    margin: auto;
    align-items: center;
}
table {
    border-collapse: collapse;

    table-layout: fixed;
}

td {
    border: 1px solid black;
    text-align: center;
    vertical-align: middle;
    width: 35px;
    height: 35px;
    position: relative;
}

td.empty {
    background-color: white;
}

/*Ballon*/
td.clicked::after {
    content: "";
    border-radius: 50%;
    background-color: rgb(0, 30, 255); /*voir pour mettre image*/
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    height: 90%;
}
/*passe impossible*/
table td:last-child, table tr:first-child,
table tr:last-child td:first-child{
    background-color: rgba(0, 0, 0, 0.435);
}
/*Case Joueur*/
tr:nth-child(15) td:nth-child(2){

    background-image: url(img/logo/passe_logo.png);
    background-size: cover;
    background-position: center;
}

table tr:nth-child(2) td:nth-child(2), table tr:nth-child(2) td:nth-child(3), table tr:nth-child(2) td:nth-child(4), 
table tr:nth-child(3) td:nth-child(2), table tr:nth-child(3) td:nth-child(3), table tr:nth-child(3) td:nth-child(4), table tr:nth-child(3) td:nth-child(5), table tr:nth-child(3) td:nth-child(6),
table tr:nth-child(4) td:nth-child(2), table tr:nth-child(4) td:nth-child(3), table tr:nth-child(4) td:nth-child(4), table tr:nth-child(4) td:nth-child(5), table tr:nth-child(4) td:nth-child(6),table tr:nth-child(4) td:nth-child(7), table tr:nth-child(4) td:nth-child(8), 
table tr:nth-child(5) td:nth-child(5), table tr:nth-child(5) td:nth-child(6), table tr:nth-child(5) td:nth-child(7), table tr:nth-child(5) td:nth-child(8), table tr:nth-child(5) td:nth-child(9),table tr:nth-child(5) td:nth-child(10), 
table tr:nth-child(6) td:nth-child(7), table tr:nth-child(6) td:nth-child(8), table tr:nth-child(6) td:nth-child(9), table tr:nth-child(6) td:nth-child(10),table tr:nth-child(6) td:nth-child(11),
table tr:nth-child(7) td:nth-child(9), table tr:nth-child(7) td:nth-child(10), table tr:nth-child(7) td:nth-child(11), table tr:nth-child(7) td:nth-child(12),
table tr:nth-child(8) td:nth-child(10), table tr:nth-child(8) td:nth-child(11), table tr:nth-child(8) td:nth-child(12),
table tr:nth-child(9) td:nth-child(11), table tr:nth-child(9) td:nth-child(12), table tr:nth-child(9) td:nth-child(13),
table tr:nth-child(10) td:nth-child(11), table tr:nth-child(10) td:nth-child(12), table tr:nth-child(10) td:nth-child(13),
table tr:nth-child(11) td:nth-child(12), table tr:nth-child(11) td:nth-child(13), table tr:nth-child(11) td:nth-child(14),
table tr:nth-child(12) td:nth-child(12), table tr:nth-child(12) td:nth-child(13), table tr:nth-child(12) td:nth-child(14),
table tr:nth-child(13) td:nth-child(13), table tr:nth-child(13) td:nth-child(14), table tr:nth-child(13) td:nth-child(15),
table tr:nth-child(14) td:nth-child(13), table tr:nth-child(14) td:nth-child(14), table tr:nth-child(14) td:nth-child(15),
table tr:nth-child(15) td:nth-child(13), table tr:nth-child(15) td:nth-child(14), table tr:nth-child(15) td:nth-child(15)
{
    background-color: red;
}

table tr:nth-child(5) td:nth-child(2),table tr:nth-child(5) td:nth-child(3),table tr:nth-child(5) td:nth-child(4),
table tr:nth-child(6) td:nth-child(2),table tr:nth-child(6) td:nth-child(3),table tr:nth-child(6) td:nth-child(4),table tr:nth-child(6) td:nth-child(5),table tr:nth-child(6) td:nth-child(6),
table tr:nth-child(7) td:nth-child(2),table tr:nth-child(7) td:nth-child(3),table tr:nth-child(7) td:nth-child(4),table tr:nth-child(7) td:nth-child(5),table tr:nth-child(7) td:nth-child(6),table tr:nth-child(7) td:nth-child(7),table tr:nth-child(7) td:nth-child(8),
table tr:nth-child(8) td:nth-child(2),table tr:nth-child(8) td:nth-child(3),table tr:nth-child(8) td:nth-child(4),table tr:nth-child(8) td:nth-child(5),table tr:nth-child(8) td:nth-child(6),table tr:nth-child(8) td:nth-child(7),table tr:nth-child(8) td:nth-child(8),table tr:nth-child(8) td:nth-child(9),
table tr:nth-child(9) td:nth-child(6),table tr:nth-child(9) td:nth-child(7),table tr:nth-child(9) td:nth-child(8),table tr:nth-child(9) td:nth-child(9),table tr:nth-child(9) td:nth-child(10),
table tr:nth-child(10) td:nth-child(7),table tr:nth-child(10) td:nth-child(8),table tr:nth-child(10) td:nth-child(9),table tr:nth-child(10) td:nth-child(10),
table tr:nth-child(11) td:nth-child(8),table tr:nth-child(11) td:nth-child(9),table tr:nth-child(11) td:nth-child(10),table tr:nth-child(11) td:nth-child(11),
table tr:nth-child(12) td:nth-child(9),table tr:nth-child(12) td:nth-child(10),table tr:nth-child(12) td:nth-child(11),
table tr:nth-child(13) td:nth-child(9),table tr:nth-child(13) td:nth-child(10),table tr:nth-child(13) td:nth-child(11),table tr:nth-child(13) td:nth-child(12),
table tr:nth-child(14) td:nth-child(9),table tr:nth-child(14) td:nth-child(10),table tr:nth-child(14) td:nth-child(11),table tr:nth-child(14) td:nth-child(12),
table tr:nth-child(15) td:nth-child(9),table tr:nth-child(15) td:nth-child(10),table tr:nth-child(15) td:nth-child(11),table tr:nth-child(15) td:nth-child(12)
{
    background-color: rgb(244, 144, 51);
}

table tr:nth-child(9) td:nth-child(2),table tr:nth-child(9) td:nth-child(3),table tr:nth-child(9) td:nth-child(4),table tr:nth-child(9) td:nth-child(5),
table tr:nth-child(10) td:nth-child(2),table tr:nth-child(10) td:nth-child(3),table tr:nth-child(10) td:nth-child(4),table tr:nth-child(10) td:nth-child(5),table tr:nth-child(10) td:nth-child(6),
table tr:nth-child(11) td:nth-child(2),table tr:nth-child(11) td:nth-child(3),table tr:nth-child(11) td:nth-child(4),table tr:nth-child(11) td:nth-child(5),table tr:nth-child(11) td:nth-child(6),table tr:nth-child(11) td:nth-child(7),
table tr:nth-child(12) td:nth-child(4),table tr:nth-child(12) td:nth-child(5),table tr:nth-child(12) td:nth-child(6),table tr:nth-child(12) td:nth-child(7),table tr:nth-child(12) td:nth-child(8),
table tr:nth-child(13) td:nth-child(5),table tr:nth-child(13) td:nth-child(6),table tr:nth-child(13) td:nth-child(7),table tr:nth-child(13) td:nth-child(8),
table tr:nth-child(14) td:nth-child(6),table tr:nth-child(14) td:nth-child(7),table tr:nth-child(14) td:nth-child(8),
table tr:nth-child(15) td:nth-child(6),table tr:nth-child(15) td:nth-child(7),table tr:nth-child(15) td:nth-child(8)
{
    background-color: rgb(255, 251, 0);
}

table tr:nth-child(12) td:nth-child(2),table tr:nth-child(12) td:nth-child(3),
table tr:nth-child(13) td:nth-child(2),table tr:nth-child(13) td:nth-child(3),table tr:nth-child(13) td:nth-child(4),
table tr:nth-child(14) td:nth-child(2),table tr:nth-child(14) td:nth-child(3),table tr:nth-child(14) td:nth-child(4),table tr:nth-child(14) td:nth-child(5),
table tr:nth-child(15) td:nth-child(3),table tr:nth-child(15) td:nth-child(4),table tr:nth-child(15) td:nth-child(5)
{
    background-color: rgb(17, 155, 45);
}
</style>
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