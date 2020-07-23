export default (socket, player) => {
    // MOVEMENT
    socket.on('player start move', (direction, speed) => {
        player.controller.movement.direction = direction;
        player.controller.movement.speed = speed;
    });
    socket.on('player stop move', (playerId) => {
        player.controller.movement.direction = 0;
    });
    socket.on('player jump', () => {
        player.controller.movement.jump = true;
    });
}