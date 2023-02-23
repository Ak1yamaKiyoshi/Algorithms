
class Board:
    def __init__(self):
      self.r1 = [7, 6, 5, 4, 3, 2, 1]
      self.r2 = []
      self.r3 = []
    
    def move(self, start, end):
        end.append(start.pop(-1))
    
    def h(self):
        def hanoi(n, start, mid, end):
            if n == 1:
                self.move(start, end)
            else:
                #other = 6 - (start + end)
                hanoi(n - 1, start, end, mid)
                self.move(start, end)
                hanoi(n - 1, mid, start, end)
        hanoi(len(self.r1), self.r1, self.r2, self.r3)
        

board = Board()
print(f" {board.r1}\n {board.r2}\n {board.r3}\n")
board.h()
print(f" {board.r1}\n {board.r2}\n {board.r3}\n")

