import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2' 
import tensorflow as tf

# constant可以視為tf專用的變數型態
# 其他包括Variable，placeholder
A = tf.constant('Hello World!')

# 使用 with 可以讓Session自動關閉
with tf.Session() as sess:

    # 在 tensorflow內要使用run，才會讓計算圖開始執行
    B = sess.run(A)

    print(B)