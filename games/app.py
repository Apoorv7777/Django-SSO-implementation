# app.py
from flask import Flask, jsonify, request

from snake_game import SnakeGame

app = Flask(__name__)
game = SnakeGame()

@app.route('/api/move_snake', methods=['POST'])
def move_snake():
    direction = request.json.get('direction')
    game.move_snake(direction)
    return jsonify(game.get_game_state())

if __name__ == '__main__':
    app.run(debug=True)
