<?php
require __DIR__ . '/MinecraftQuery.class.php';

$Query = new MinecraftQuery( );

try {
//server ip, then port
$Query->Connect( 'QuickStealLS.minehut.gg', 25565 );

//prints out stuff
print_r( $Query->GetInfo( ) );
//prints out players
print_r( $Query->GetPlayers( ) );
} catch( MinecraftQueryException $e ) {
echo $e->getMessage( );
}
?>
