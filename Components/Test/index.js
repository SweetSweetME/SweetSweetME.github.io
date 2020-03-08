export default function Test() {
    return (
        <div className="text-inner">
            test 测试 global styles
            <style>
                {`
                    .text-inner {
                        color: purple;
                    }
                `}
            </style>
        </div>

    )
}