<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    
    $json = file_get_contents('php://input'); // RECIBE EL JSON DE ANGULAR
    
    $params = json_decode($json); // DECODIFICA EL JSON Y LO GUARADA EN LA VARIABLE
    
    $nombre = $params->nombre;
    $nombreArchivo = $params->nombreArchivo;
    $id = $params->id;
    $archivo = $params->base64textString;
    $archivo = base64_decode($archivo);
    
    $filePath = $_SERVER['DOCUMENT_ROOT']."/contenido/logos/".$id."/".$nombre;
    file_put_contents($filePath, $archivo);
    
    
    class Result {}
    // GENERA LOS DATOS DE RESPUESTA
    $response = new Result();
    
    $response->resultado = 'OK';
    $response->mensaje = 'SE SUBIO EXITOSAMENTE';
    
    header('Content-Type: application/json');
    echo json_encode($response); // MUESTRA EL JSON GENERADO
?>
