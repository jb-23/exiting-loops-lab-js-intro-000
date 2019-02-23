
function breakOut(a, x, k) {
  for (var i=0; i<a.length; ++i) {
    if (i === k) break;
    a[i] = x;
  }
}
