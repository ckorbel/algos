class Solution:
    def back_track(self, output, current_string, open, closed, max):
        if len(current_string) == (max * 2): 
            output.append(current_string)
            return 
        
        # rules
        if open < max: 
            self.back_track(output, current_string + "(", open + 1, closed, max)
        
        if closed < open: 
            self.back_track(output, current_string + ")", open, closed + 1, max)
            
    
    def generateParenthesis(self, n: int) -> List[str]:
        output = []
        self.back_track(output, "", 0, 0, n)
        return output



    # ((()))  => (()