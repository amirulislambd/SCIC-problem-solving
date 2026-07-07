var canConstruct = function(ransomNote, magazine) {
    if (ransomNote.length > magazine.length) return false;
    const count = new Uint32Array(26);

    // ১. উৎস (magazine) থেকে অক্ষরগুলো সংগ্রহ করে প্লাস করি
    for (let i = 0; i < magazine.length; i++) {
        count[magazine.charCodeAt(i) - 97]++;
    }
    
    // ২. এবার চিরকুট (ransomNote) বানাতে সেগুলো খরচ (মাইনাস) করি
    for (let i = 0; i < ransomNote.length; i++) {
        const index = ransomNote.charCodeAt(i) - 97;
        
        // খরচ করার সময় যদি দেখি ওই অক্ষর আর একটাও বাকি নেই (০ হয়ে আছে)
        if (count[index] === 0) return false;
        
        count[index]--;
    }

    return true;
};

console.log(canConstruct("aa", "aaf")); // আউটপুট: true (এবার একদম সঠিক!)