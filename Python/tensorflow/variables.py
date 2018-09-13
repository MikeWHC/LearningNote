import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2' 
import tensorflow as tf

# 宣告變數    
B = tf.Variable(0, dtype=tf.int64)
with tf.Session() as sess:
    # 變數需要初始化
    sess.run( tf.global_variables_initializer() )

    # 使用 assign 更改變數值
    # 特別注意 assign 這個函數，此函數需要經過 sess.run() 之後，才會賦予新值。
    for i in range(5):
        print( sess.run(B.assign(i)) )