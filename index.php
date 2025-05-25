<?php
include 'conexion.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $correo = $_POST["correo"];
    $telefono = $_POST["telefono"];

    $sql = "INSERT INTO clientes (nombre, correo, telefono) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sss", $nombre, $correo, $telefono);

    if ($stmt->execute()) {
        echo "Cliente agregado exitosamente.";
    } else {
        echo "Error al agregar cliente: " . $conn->error;
    }

    $stmt->close();
    $conn->close();
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Agregar Cliente</title>
</head>
<body>
    <h2>Formulario para agregar un nuevo cliente</h2>
    <form method="post">
        <label>Nombre:</label><br>
        <input type="text" name="nombre" required><br><br>
        <label>Correo:</label><br>
        <input type="email" name="correo" required><br><br>
        <label>Teléfono:</label><br>
        <input type="text" name="telefono" required><br><br>
        <button type="submit">Agregar Cliente</button>
    </form>
</body>
</html>
