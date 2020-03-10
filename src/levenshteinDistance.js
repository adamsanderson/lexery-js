// Support function for computing the Levenshtein Distance for two words
// translated to js from http://rubyforge.org/projects/text
function levenshteinDistance(word1, word2){
  if (word1 === word2) return 0;
  
  const n = word1.length; 
  const m = word2.length;

	if (0 === n) return m;
  if (0 === m) return n;
  
  var d = new Array(m); 
  for(var i = 0; i <= m; d[i] = i++); // d = 0..m

  let cost, x, e;
  
	for(let i = 0; i < n; i++){
		e = i + 1;
		for(var j = 0; j < m; j++){
			cost = (word1[i] === word2[j]) ? 0 : 1;
      x = Math.min(
				d[j+1] + 1, // insertion
        e + 1,      // deletion
        d[j] + cost // substitution
			);
      d[j] = e;
      e = x;
		}
		d[m] = x;
	}

	return x;
}

export default levenshteinDistance;