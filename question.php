<?php
    $link = mysqli_connect('localhost', 'root', '', 'faststart');
    mysqli_set_charset($link, 'utf8');  
?>

<?php if (isset($_GET['name2'])) : ?>
    <?php
        $sql = "INSERT INTO questions (id, name2, email2, message) 
        VALUES (null, '{$_GET['name2']}', '{$_GET['email2']}', '{$_GET['message']}')";

        $result = mysqli_query($link, $sql);

        if ($result) {
            echo "<div class='contacts-request-success'>Форма отправлена!<br>
            {$_GET['name2']}, спасибо за вашу заявку!<br>
            Менеджер в ближайшее время Вам напишет</div>";
        } else {
            echo '<div class="contacts-request-success">К сожалению, по техническим причинам не удалось отправить данные</div>';
        }
    ?>
<?php endif; ?>