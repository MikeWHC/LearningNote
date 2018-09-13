import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2' 
import tensorflow as tf

# 宣告占位符
C = tf.placeholder(dtype=tf.int64)
D = tf.placeholder(dtype=tf.int64)
E = tf.placeholder(dtype=tf.int64)

F = D + E

with tf.Session() as sess:
    # 可以一次填充所有的占位符
    result = sess.run(F, feed_dict={C:10, D:20, E:30})
    print(result) # 50
    
    # 或者只填充計算所需要的
    result = sess.run(F, feed_dict={D:20, E:30})
    print(result) # 50
    
    # 這段程式會使系統報錯！
    # 計算所需的占位符不能為空，每次執行 sess.run() 都要填充，
    # 占位符不是變數，不會留存上次填充的資料。
    # result = sess.run(F, feed_dict={E:30})
    # print(result)