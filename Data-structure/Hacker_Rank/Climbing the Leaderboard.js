// Solution 1
function climbingLeaderboard(ranked, player) {
  let scorePlayer = [];
  const uniqueRanked = [...new Set(ranked)];
  let j = uniqueRanked.length - 1;

  for (let score of player) {
    while (j >= 0) {
      if (score >= uniqueRanked[j]) {
        j--;
      } else {
        scorePlayer.push(j + 2);
        break;
      }
    }
    if (j < 0) {
      scorePlayer.push(1);
    }
  }
  return scorePlayer;
}

// Solution 2: recursion
function climbingLeaderboard2(ranked, player) {
  // Sắp xếp và loại bỏ các phần tử trùng lặp từ mảng ranked
  ranked = [...new Set(ranked)].sort((a, b) => b - a);

  // Mảng để lưu trữ hạng của từng điểm số của Alice
  const ranks = [];

  // Hàm đệ quy để tìm hạng của điểm số score của Alice
  function findRank(score, start, end) {
    // Nếu chỉ số bắt đầu lớn hơn chỉ số kết thúc, Alice có hạng là 1 (thấp nhất)
    if (start > end) {
      return 1;
    }

    // Tính chỉ số giữa
    const mid = Math.floor((start + end) / 2);

    // Nếu điểm số của Alice bằng với điểm số tại chỉ số mid trong mảng ranked
    if (score === ranked[mid]) {
      return mid + 1; // Hạng của Alice là mid + 1 vì hạng là 1-based
    } else if (score > ranked[mid]) {
      // Nếu điểm số của Alice lớn hơn điểm số tại chỉ số mid,
      // Tiếp tục tìm kiếm trong nửa bên trái của mảng ranked
      return findRank(score, start, mid - 1);
    } else {
      // Nếu điểm số của Alice nhỏ hơn điểm số tại chỉ số mid,
      // Tiếp tục tìm kiếm trong nửa bên phải của mảng ranked
      return findRank(score, mid + 1, end);
    }
  }

  // Duyệt qua từng điểm số của Alice và tính toán hạng của từng điểm số
  for (let score of player) {
    // Gọi hàm findRank để tìm hạng của score trong mảng ranked
    const rank = findRank(score, 0, ranked.length - 1);
    // Đưa hạng tìm được vào mảng ranks
    ranks.push(rank);

    // Hiển thị chi tiết: điểm số của Alice và hạng tương ứng
    console.log(`Score ${score} has rank ${rank}`);
  }

  // Trả về mảng ranks chứa các hạng của Alice sau mỗi lượt chơi
  return ranks;
}

// Example usage:
const ranked = [100, 90, 90, 80, 75, 60];
const player = [50, 65, 77, 90, 102];
const result1 = climbingLeaderboard(ranked, player);
