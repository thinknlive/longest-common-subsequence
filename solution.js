/*
We have some clickstream data that we gathered on our client's website. Using cookies, we collected snippets of users' anonymized URL histories while they browsed the site. The histories are in chronological order and no URL was visited more than once per person.

Write a function that takes two users' browsing histories as input and returns the longest contiguous sequence of URLs that appears in both.

Sample output:

findContiguousHistory(user0, user1)
   /pink.php
   /register.asp
   /orange.html

findContiguousHistory(user1, user2)
   /green.html
   /blue.html
   /pink.php
   /register.asp

findContiguousHistory(user0, user3)
   (empty)

findContiguousHistory(user2, user3)
   /blue.html

findContiguousHistory(user3, user3)
   /blue.html
   /logout.php
*/

var user0 = [ "/start.html", "/pink.php", "/register.asp", "/orange.html", "/red.html" ];
var user1 = [ "/start.html", "/green.html", "/blue.html", "/pink.php", "/register.asp", "/orange.html" ];
var user2 = [ "/red.html", "/green.html", "/blue.html", "/pink.php", "/register.asp" ];
var user3 = [ "/blue.html", "/logout.php" ];

function findContiguousHistory (user0, user1) {
  var matches = [];
  var short = user0, long = user1;

  if (short.length > long.length) {
    let temp = short;
    short = long;
    long = temp;
  }

  //console.dir(short);
  //console.dir(long);

  long = long.join('');
  //console.log(long);
  for (let i=0; i<short.length; i+=1) {
    let shortslice = short.slice(i);
    //console.log('shortslice: ' + JSON.stringify(shortslice));
    for (let j=1; j<shortslice.length+1; j+=1) {
      let bitesize = j;
      let shortbits = shortslice.slice(0,j);
      let shortbite = shortbits.join('');
      //console.log('shortbite: ' + JSON.stringify(shortbits));
      if (long.indexOf(shortbite) >= 0) {
        matches.push([bitesize, shortbits]);
      }
    }
  }

  let maxlen =0;
  let maxndx = 0;
  for(let i=0; i<matches.length; i+=1) {
     if (matches[i][0] > maxlen) {
        maxlen =matches[i][0];
        maxndx = i;
     }
  }

  //console.dir(matches);

  return matches.length ? matches[maxndx][1] : [];

}

/*
findContiguousHistory(user0, user1)
   /pink.php
   /register.asp
   /orange.html

findContiguousHistory(user1, user2)
   /green.html
   /blue.html
   /pink.php
   /register.asp

findContiguousHistory(user0, user3)
   (empty)

findContiguousHistory(user2, user3)
   /blue.html

findContiguousHistory(user3, user3)
   /blue.html
   /logout.php
*/

console.dir(findContiguousHistory(user0, user1));
console.dir(findContiguousHistory(user1, user2));
console.dir(findContiguousHistory(user0, user3));
console.dir(findContiguousHistory(user2, user3));
console.dir(findContiguousHistory(user3, user3));


/*
Another problem solution. Sum hits over domains.

function fn (data) {
  var result = {};

  data.forEach((elt) => {
    let pieces = elt.split(',');
    let domains = pieces[1].split('.');
    let hitcount = parseInt(pieces[0],10);


    for (let i =0; i<domains.length; i+=1) {
      let domain = domains.slice(i).join('.');
      if (result.hasOwnProperty(domain)) {
        result[domain] += hitcount;
      }
      else {
        result[domain] = hitcount;
      }
    }
  });

  return result;
}

//console.dir(counts);

//console.dir(fn(counts));
*/



